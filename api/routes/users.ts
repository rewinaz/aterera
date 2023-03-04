import express, { Request, Response } from "express";
import User, { validate } from "../models/user";
import bcrypt from "bcrypt";
import auth from "../middlewares/auth";
const router = express.Router();

router.get("/me", auth, async (req: any, res: Response) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    res.send(user);
  } catch (error) {
    res.status(500).send({ messasge: "Something went wrong" });
  }
});

router.post("/", async (req: Request, res: Response) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    let user = await User.findOne({ email: req.body.email });
    if (user)
      return res.status(400).send({ message: "User already registered" });

    user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();

    const token = user.generateAuthToken();
    res.header("x-auth-token", token).send({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });
  } catch (error) {
    res.status(500).send({ message: "Something went wrong" });
  }
});

router.delete("/", auth, async (req: any, res: Response) => {
  try {
    const user = await User.findByIdAndRemove(req.user._id);
    if (!user) return res.status(404).send({ message: "User not found" });
    res.status(200).send({ message: "User deleted" });
  } catch (error) {
    res.status(500).send({ message: "Something went wrong" });
  }
});

export default router;

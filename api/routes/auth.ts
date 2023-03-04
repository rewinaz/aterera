import express, { Request, Response } from "express";
import { User } from "../models/user";
import bcrypt from "bcrypt";
import Joi from "joi";
const router = express.Router();

router.post("/", async (req, res) => {
  const { error } = validateLoginData(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    let user = await User.findOne({ email: req.body.email });
    if (!user)
      return res.status(400).send({ message: "Invalid email or password" });

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword)
      return res.status(400).send({ message: "Invalid email or password" });

    const token = user.generateAuthToken();

    res.header("x-auth-token", token).send({ token: token });
  } catch (error) {
    res.status(500).send({ message: "Something went wrong" });
  }
});

const validateLoginData = (data: any) => {
  const schema = Joi.object({
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(8).max(255).required(),
  });

  return schema.validate(data);
};

export default router;

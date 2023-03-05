import express, { Request, Response } from "express";
import mongoose from "mongoose";
import auth from "../middlewares/auth";
import Note from "../models/note";
import User from "../models/user";

const router = express.Router();

router.get("/", auth, async (req: any, res: Response) => {
  try {
    const notes = await Note.find({ owner: req.user._id, status: "deleted" });
    if (!notes) return res.status(404).json({ error: "Trash is empty" });
    res.status(200).json(notes);
  } catch (err: any) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

router.put("/recover/:id", auth, async (req: any, res: Response) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id))
    return res.status(400).json({ error: "Invalid note id" });

  try {
    const note = await Note.findOneAndUpdate(
      { _id: req.params.id, owner: req.user._id, status: "deleted" },
      { status: "active" },
      { new: true }
    );
    if (!note) return res.status(404).json({ error: "Note not found" });

    const user = await User.findByIdAndUpdate(
      req.user._id,
      { $push: { notes: note._id } },
      { new: true }
    );
    res.status(200).json(note);
  } catch (err: any) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

router.delete("/:id", auth, async (req: any, res: Response) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id))
    return res.status(400).json({ error: "Invalid note id" });

  try {
    const note = await Note.findOneAndDelete({
      _id: req.params.id,
      owner: req.user._id,
      status: "deleted",
    });
    if (!note) return res.status(404).json({ error: "Note not found" });
    res.status(200).json({ message: "Note deleted from trash successfully" });
  } catch (err: any) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

export default router;

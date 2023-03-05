import { Request, Response } from "express";
import Note, { validateNote } from "../models/note";
import User from "../models/user";
import mongoose from "mongoose";

export const createNote = async (req: any, res: Response) => {
  const { error } = validateNote(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  try {
    const note = new Note({
      owner: req.user._id,
      title: req.body.title,
      content: req.body.content,
      categories: req.body.categories,
      status: "active",
    });

    await note.save();

    const user = await User.findByIdAndUpdate(
      req.user._id,
      { $push: { notes: note._id } },
      { new: true }
    );

    res.status(200).json(note);
  } catch (err: any) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const getAllNotes = async (req: any, res: Response) => {
  try {
    const notes = await Note.find({ owner: req.user._id, status: "active" });
    res.status(200).json(notes);
  } catch (err: any) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const getNoteById = async (req: any, res: Response) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id))
    return res.status(400).json({ error: "Invalid note id" });
  try {
    const note = await Note.findOne({
      _id: req.params.id,
      owner: req.user._id,
      status: "active",
    });
    if (!note) return res.status(404).json({ error: "Note not found" });
    res.status(200).json(note);
  } catch (err: any) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const updateNoteById = async (req: any, res: Response) => {
  const { error } = validateNote(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  if (!mongoose.Types.ObjectId.isValid(req.params.id))
    return res.status(400).json({ error: "Invalid note id" });

  try {
    const note = await Note.findOneAndUpdate(
      { _id: req.params.id, owner: req.user._id, status: "active" },
      {
        title: req.body.title,
        content: req.body.content,
        categories: req.body.categories,
        modifiedDate: Date.now(),
      },
      { new: true }
    );
    if (!note) return res.status(404).json({ error: "Note not found" });
    res.status(200).json(note);
  } catch (err: any) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const addNoteToTrash = async (req: any, res: Response) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id))
    return res.status(400).json({ error: "Invalid note id" });

  try {
    const note = await Note.findOneAndUpdate(
      { _id: req.params.id, owner: req.user._id, status: "active" },
      { status: "deleted", deleteDate: Date.now() },
      { new: true }
    );
    if (!note) return res.status(404).json({ error: "Note not found" });

    const user = await User.findByIdAndUpdate(
      req.user._id,
      { $pull: { notes: note._id } },
      { new: true }
    );
    res.status(200).json({ message: "Note deleted successfully" });
  } catch (err: any) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

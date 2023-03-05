import Joi from "joi";
import mongoose from "mongoose";

export interface NoteDocType extends mongoose.Document {
  owner: string;
  title: string;
  content: string;
  categories: string[];
  createdDate: Date;
  modifiedDate: Date;
  deleteDate: Date;
  status: "active" | "deleted";
}

const noteSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  title: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50,
  },
  content: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 10000,
  },
  categories: {
    type: [String],
    default: [],
  },
  createdDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
  modifiedDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
  deleteDate: {
    type: Date,
    required: false,
    default: null,
  },
  status: {
    type: String,
    required: true,
    default: "active",
  },
});

const Note = mongoose.model<NoteDocType>("NOTE", noteSchema);

export const validateNote = (note: NoteDocType) => {
  const schema = Joi.object({
    title: Joi.string().min(1).max(50).required(),
    content: Joi.string().min(1).max(10000).required(),
    categories: Joi.array().items(Joi.string()),
    status: Joi.string().valid("active", "deleted"),
  });

  return schema.validate(note);
};

export default Note;

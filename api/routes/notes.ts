import express from "express";
import auth from "../middlewares/auth";
import {
  addNoteToTrash,
  createNote,
  getAllNotes,
  getNoteById,
  updateNoteById,
} from "../controllers/notes";

const router = express.Router();

router.post("/", auth, createNote);
router.get("/", auth, getAllNotes);
router.get("/:id", auth, getNoteById);
router.put("/:id", auth, updateNoteById);
router.delete("/:id", auth, addNoteToTrash);

export default router;

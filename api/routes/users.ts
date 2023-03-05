import express from "express";
import auth from "../middlewares/auth";
import {
  createNewUser,
  deleteUser,
  getCurrentUser,
} from "../controllers/users";
const router = express.Router();

router.get("/me", auth, getCurrentUser);
router.post("/", createNewUser);
router.delete("/", auth, deleteUser);

export default router;

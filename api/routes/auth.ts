import express from "express";
import { userLoginHandler } from "../controllers/auth";
const router = express.Router();

router.post("/", userLoginHandler);

export default router;

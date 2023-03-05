import express from "express";
import auth from "../middlewares/auth";

const router = express.Router();

router.get("/", auth);
router.put("/recover/:id", auth);
router.delete("/:id", auth);

export default router;

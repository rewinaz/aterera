import { Request, Response } from "express";

const express = require("express");
const router = express.Router();

router.get("/", (req: any, res: any) => {
  console.log("Get Note");

  res.status(200).json({ note: "note" });
});

module.exports = router;

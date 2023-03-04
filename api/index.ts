import { Mongoose } from "mongoose";

const express = require("express");
const mongoose: Mongoose = require("mongoose");
const app = express();
const port = 3000 | Number(process.env.PORT);

// Routes
const noteRoute = require("./routes/note");

app.use(express.json());

app.use("/api/v1/note", noteRoute);

mongoose.set("strictQuery", true);
mongoose
  .connect("mongodb://localhost:27017/aterera")
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

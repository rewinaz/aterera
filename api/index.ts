import mongoose from "mongoose";
import morgan from "morgan";
import express from "express";
import dotenv from "dotenv";
// Routes
import authRoute from "./routes/auth";
import userRoute from "./routes/users";
import noteRoute from "./routes/notes";

const app = express();
const PORT = 3000 | Number(process.env.PORT);

dotenv.config();
app.use(express.json());
app.use(morgan("tiny"));

// Routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/note", noteRoute);

mongoose.set("strictQuery", true);
mongoose
  .connect("mongodb://localhost:27017/aterera")
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err: any) => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

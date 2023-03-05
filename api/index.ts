import mongoose from "mongoose";
import morgan from "morgan";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
// Routes
import authRoute from "./routes/auth";
import userRoute from "./routes/users";
import noteRoute from "./routes/notes";
import trashRoute from "./routes/trash";

const app = express();
const PORT = 3000 | Number(process.env.PORT);

dotenv.config();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("tiny"));

// Routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/note", noteRoute);
app.use("/api/v1/trash", trashRoute);

mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err: any) => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import server from "./startup/server";
// Routes
import authRoute from "./routes/auth";
import userRoute from "./routes/users";
import noteRoute from "./routes/notes";
import trashRoute from "./routes/trash";

const PORT = 3000 | Number(process.env.PORT);

dotenv.config();
server.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
server.use(morgan("tiny"));

// Routes
server.use("/api/v1/auth", authRoute);
server.use("/api/v1/user", userRoute);
server.use("/api/v1/note", noteRoute);
server.use("/api/v1/trash", trashRoute);

mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err: any) => {
    console.log(err);
  });

server.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

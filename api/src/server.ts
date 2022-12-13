import express from "express";
import mongoose from "mongoose";
import { json } from "body-parser";
import { userRouter } from "./routes";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
const app = express();
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PATCH", "DELETE", "PUT"],
    allowedHeaders:
      "Content-Type, Authorization, Origin, X-Requested-With, Accept",
  })
);
app.use(json());
app.use(userRouter);
mongoose.set("strictQuery", false);
console.log(process.env.URL);
mongoose
  .connect(
    "mongodb+srv://umairmanzoor:NFTpool@cluster0.ovmuugh.mongodb.net/?retryWrites=true&w=majority"
  )
  .then((result) => {
    console.log("Connected to DB.");
  })
  .catch((error) => {
    console.log(error);
  });
app.listen(3000, () => {
  console.log("server is listening on port 3000");
});

import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authrouter from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],

  })
);

const port = process.env.PORT || 3000;

app.use("/api", authrouter);

app.listen(port, () => {
  connectDB();
  console.log(`Server running on port: ${port}`);
});

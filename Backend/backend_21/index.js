import express from "express";
import dotenv from 'dotenv'
import connectDBn from "./config/db.js";
import userRouter from "./routes/user.routes.js";

dotenv.config()

// dotenv.config();
const app = express()

app.use(express.json()); //middle ware

app.use("/api",userRouter)//defualt


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
   connectDBn()
  console.log(`server running on ${PORT}`);
});

import express from "express";
import { getUserData, login, logout, signUp } from "../controllers/auth.controllers.js";
import { upload } from "../middlewares/multer.js";
import { checkAuth } from "../middlewares/checkAuth.js";

const authrouter = express.Router();

/* Routes */
authrouter.post(
  "/signup",
  upload.single("profileImage"), // ✅ field name
  signUp
);

authrouter.post("/login", login);
authrouter.post("/logout", logout);
authrouter.get("/getuserdata",checkAuth,getUserData);

export default authrouter;

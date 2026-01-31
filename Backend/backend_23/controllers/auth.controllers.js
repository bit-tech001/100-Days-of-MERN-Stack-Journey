import uploadOnCloudinary from "../config/cloudinary.js";
import generateToken from "../config/token.js";
import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";

// SIGN UP
export const signUp = async (req, res) => {
  try {
    const { firstName, lastName, email, password, userName } = req.body;

    if (!firstName || !lastName || !email || !password || !userName) {
      return res.status(400).json({ message: "Fill all the fields" });
    }

    let profileImage;
    if (req.file) {
      profileImage = await uploadOnCloudinary(req.file.path);
    }

    console.log(req.file);

    const existUser = await User.findOne({ email });

    if (existUser) {
      return res.status(400).json({ message: "User already exists!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      firstName,
      lastName,
      email,
      userName,
      password: hashedPassword,
      profileImage,
    });

    const token = generateToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENVIRONMENT === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(201).json({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      userName: user.userName,
      profileImage,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// LOGIN
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });

    if (!userExist) {
      return res.status(400).json({ message: "User does not exist" });
    }

    const match = await bcrypt.compare(password, userExist.password);

    if (!match) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    const token = generateToken(userExist._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENVIRONMENT === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      firstName: userExist.firstName,
      lastName: userExist.lastName,
      email: userExist.email,
      userName: userExist.userName,
      profileImage:userExist.profileImage
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

//logout
export const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    return res.status(200).json({ message: "Log out sucessfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
export const getUserData = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};


//all functions

import { User } from "../model/userModel.js";

export const home=(req, res) => {
  res.send("<h1>i am server </h1>");
}
//create function
export const createUser =  async (req, res) => {
  try {
    let { name, email, address } = req.body; //stror all  usrrs value

    const newUser = await User.create({
      name,
      email,
      address,
    });

    res.status(201).json({ message: "User created" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

export const fetchUser = async (req, res) => {
  //retrive from database
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(400).json({ message: "user not found" });
  }
}


export const fetchByName =   async (req, res) => {
  //retrive from database
  try {
    const users = await User.findOne({ name: req.params.name });
    return res.status(200).json(users);
  } catch (error) {
    return res.status(400).json({ message: "user not found" });
  }
}
 
//update-fun

export const UpdateUser = async (req, res) => {
  try {
    let { name } = req.body;
    let id = req.params.id;
    let updatUser = await User.findByIdAndUpdate(id, { name }, { new: true });

    res.status(200).json(updatUser);
  } catch (error) {
    return res.status(400).json({ message: "user not found" });
  }
}

export const deleteUser = async (req, res) => {
  try {
    let id = req.params.id;
    let delteUser = await User.findByIdAndDelete(id);
    return res.status(200).json(delteUser);
  } catch (error) {
    return res.status(400).json({ message: "user not found" });
  }
}
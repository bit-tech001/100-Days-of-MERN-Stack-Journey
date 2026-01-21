import  { Router } from "express"
import express from "express"
import { createUser, home ,fetchUser,fetchByName,UpdateUser ,deleteUser} from "../controller/user.controller.js";

let userRouter = express(Router());

userRouter.get("/",home)

userRouter.post("/create",createUser);

userRouter.get("/read", fetchUser);

userRouter.get("/read/:name",fetchByName )
//update -route

userRouter.put("/update/:id",UpdateUser)

//delette
userRouter.delete("/delete/:id",deleteUser );


export  default userRouter
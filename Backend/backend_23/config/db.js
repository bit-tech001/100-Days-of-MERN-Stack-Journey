import mongoose from "mongoose"


const coonectDB = async() => {
     try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Connected DB");

     }catch(error) {
        console.log("Database error" , error);
     }
}

export default coonectDB;
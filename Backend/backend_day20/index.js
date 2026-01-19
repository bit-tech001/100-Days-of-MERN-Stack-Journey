
import express from 'express'
import mongoose from 'mongoose';
import User  from './models/user.model.js';

const app = express()
app.use(express.json())  //middleware

const  URI = "mongodb+srv://bp2817433_db_user:bitnoxz12@cluster0.qf6fhvz.mongodb.net/mydata"


  const connectDB = async ()=>{
     try{
       await mongoose.connect(URI)
       console.log("DB connected");

     }catch(error) {
      console.log(error);
     }
  }

app.get('/' , (req,res)=> {
    connectDB()
    res.send('<h1>i am server</h1>')
})

//carate user
app.post('/create' , async(req,res)=>{
    try { 
      let  {name,age,email,userName} = req.body 

      const newUser =  await  User.create({  //new user
         name,
         age,
         email,
         userName
      
      })

      res.status(201).json({message: "User created"})
      
     
    }catch(error) {
        res.status(400).json({message: error})
    }

})


const port = process.env.PORT_URL || 3000;

app.listen(port,()=>{
    console.log(`server running on port http://localhost:${port}`);
    
})
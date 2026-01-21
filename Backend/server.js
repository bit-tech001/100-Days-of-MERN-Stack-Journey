

// // // Import the express module 
// // require('dotenv').config()

// // const express = require('express'); 


// //  const app = express(); 
// //  const port = 3000


// //  app.get('/', (req, res) => { 
// //   res.send('Hello, World!'); 
// // }); 

// // app.get('/twiter', (req,res)=>{
// //      res.send(alert("hii"));
// // })

// // app.get('/youtube', (req , res)=> {
// //     res.send("<h2>Welcome to Youtube</h2>")
// // })

// // // Start the server on port 3000 
// // app.listen(process.env.PORT, () => { 
// //   console.log(`Server is running on http://localhost: ${port}`); 
// // }); 


// // import express from 'express'

// // const  app = express()

// // const port =   process.env.PORT || 3000

// // app.get('/' , (req, res)=> {
// //      res.send('<h1>Hi i am Home</h1>')
// // })

// // app.get('/product' , (req, res)=> {
// //      res.send('<h1>Hi i am product page</h1>')
// // })

// // app.get('/price' , (req, res)=> {
// //     res.send('<h1>Hi i am Price page</h1>')
// // })


// // app.listen(port,()=> {
// //      console.log(`Server is running  http://localhost:${port}`);
     
// // })




// import express from 'express'
// import cors from 'cors'

// const app = express();
// app.use(cors({
//    origin: "http://localhost:5173"
// }))

//   let user =[]

// app.use(express.json()) //middlewarel
// // let password = "bitu123";
// //custom middle - pass authnicate
//   //  app.use((req,res,next)=>{
//   //      if(req.body.pass != password) {
//   //              res.send("<h1>invaild password, try again </h1>")
//   //      }
//   //      next()
//   //  })

// // app.get('/' , (req,res)=> {
// //     //  res.set("x-username" , "bitu")
// //     //  res.removeHeader("x-powered-by")
// //     // console.log(req.headers) //all heades


// //       res.send("<h1>HII Iam Server </h1>")

// app.get('/' , (req,res)=> {
//    user.push(req.body)
// })

// app.post('/' , (req,res)=>{
//   console.log(req.body)
//   res.send({success:true})
// })

// // app.get('/search' ,(req,res)=>{

// //   let queryRequest = req.query // data from URL
// //    res.json(queryRequest);
// //   res.send({name: "bitu",age:22})
// //     console.log(queryRequest);
// // })


// const port = process.env.PORT || 3000;
// app.listen(port, ()=>{
//     console.log(`Server at http://localhost: ${port}`);
    
// })



// // app.use(express.json()) //middleware

// // app.get('/',(req,res)=>{
// //     res.send('<h1>Server is ready</h1>')
// // })

// // app.post('/', (req, res)=>{
// //   let body =req.body
// //   res.send("hello")
// //    console.log(body)
// // })

// // app.get('/data', (req,res)=> {
// //    res.json({name:"bitu", class:6})
// // })


// //  app.get('/api/jokes',(req,res)=> {
// //   const jokes = [
// //   {
// //     id: 1,
// //     category: "Programming",
// //     joke: "Why do programmers prefer dark mode? Because light attracts bugs."
// //   },
// //   {
// //     id: 2,
// //     category: "JavaScript",
// //     joke: "Why did JavaScript break up with HTML? Because it found CSS more attractive."
// //   },
// //   {
// //     id: 3,
// //     category: "Developer Life",
// //     joke: "I told my computer I needed a break, and it said: 'No problem — I'll freeze.'"
// //   },
// //   {
// //     id: 4,
// //     category: "Coding",
// //     joke: "Why do developers hate nature? Too many bugs."
// //   },
// //   {
// //     id: 5,
// //     category: "Debugging",
// //     joke: "Debugging: Removing the needles from the haystack."
// //   }
// // ];

// //  res.send(jokes)
// // export default jokes;



import express from "express";
import cors from "cors";

const app = express();

app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json());

// Temporary in-memory storage
let users = [];

// GET → return all users
app.get("/", (req, res) => {
  res.send("hi")
  // res.json(users); // ✅ ARRAY
});

// app.get('/nn' , (req,res)=> {
//     res.send('<h1>i am server</h1>')
// })


// POST → add new user
app.post("/", (req, res) => {
  console.log(req.body);

  users.push(req.body); // save data

  res.json({
    success: true,
    message: "User added successfully"
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

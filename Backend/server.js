

// // Import the express module 
// require('dotenv').config()

// const express = require('express'); 


//  const app = express(); 
//  const port = 3000


//  app.get('/', (req, res) => { 
//   res.send('Hello, World!'); 
// }); 

// app.get('/twiter', (req,res)=>{
//      res.send(alert("hii"));
// })

// app.get('/youtube', (req , res)=> {
//     res.send("<h2>Welcome to Youtube</h2>")
// })

// // Start the server on port 3000 
// app.listen(process.env.PORT, () => { 
//   console.log(`Server is running on http://localhost: ${port}`); 
// }); 


// import express from 'express'

// const  app = express()

// const port =   process.env.PORT || 3000

// app.get('/' , (req, res)=> {
//      res.send('<h1>Hi i am Home</h1>')
// })

// app.get('/product' , (req, res)=> {
//      res.send('<h1>Hi i am product page</h1>')
// })

// app.get('/price' , (req, res)=> {
//     res.send('<h1>Hi i am Price page</h1>')
// })


// app.listen(port,()=> {
//      console.log(`Server is running  http://localhost:${port}`);
     
// })




import express from 'express'

const app = express();

app.get('/',(req,res)=>{
    res.send('Server is ready')
})


 app.get('/api/jokes',(req,res)=> {
  const jokes = [
  {
    id: 1,
    category: "Programming",
    joke: "Why do programmers prefer dark mode? Because light attracts bugs."
  },
  {
    id: 2,
    category: "JavaScript",
    joke: "Why did JavaScript break up with HTML? Because it found CSS more attractive."
  },
  {
    id: 3,
    category: "Developer Life",
    joke: "I told my computer I needed a break, and it said: 'No problem — I'll freeze.'"
  },
  {
    id: 4,
    category: "Coding",
    joke: "Why do developers hate nature? Too many bugs."
  },
  {
    id: 5,
    category: "Debugging",
    joke: "Debugging: Removing the needles from the haystack."
  }
];


   res.send(jokes)
// export default jokes;


 })


const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Server at http://localhost: ${port}`);
    
})
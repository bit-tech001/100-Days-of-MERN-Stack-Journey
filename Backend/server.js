import express from "express";
import cors from "cors";

const app = express();

// ✅ CORS (allow React app)
app.use(cors({
  origin: "http://localhost:5173", // React / Vite
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

// Temporary storage
let users = [];

// GET → test route
app.get("/", (req, res) => {
  res.send("Server is running");
});

// POST → add user
app.post("/", (req, res) => {
  console.log(req.body);

  users.push(req.body);

  res.json({
    success: true,
    message: "User added successfully"
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import cors from "cors";
// import fileRoutes from "./routes/files.js"; // Import File Routes

// dotenv.config();
// const app = express();

// app.use(cors());
// app.use(express.json()); // Parse JSON requests

// // MongoDB Connection
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => console.log("MongoDB Connected"))
//   .catch((error) => console.error("MongoDB Connection Failed:", error));

// // Routes
// app.use("/api/files", fileRoutes); 

// // Test Endpoint for API
// app.get("/api/files/search", async (req, res) => {
//   const { branch, year, semester } = req.query;

//   if (!branch || !year || !semester || !subject) {
//     return res.status(400).json({ success: false, message: 'Missing required parameters' });
//   }

//   try {
//     // Case-insensitive search in MongoDB using RegExp
//     const resources = await mongoose.model('File').find({
//       branch: new RegExp(`^${branch}$`, "i"),
//       year: new RegExp(`^${year}$`, "i"),
//       semester: new RegExp(`^${semester}$`, "i"),
//       subject: new RegExp(`^${subject}$`, "i"), // ✅ Case-insensitive match
//     });

//     if (resources.length > 0) {
//       return res.json({ success: true, data: resources });
//     } else {
//       return res.json({ success: false, message: 'No resources found' });
//     }
//   } catch (error) {
//     console.error("Error fetching resources:", error);
//     return res.status(500).json({ success: false, message: 'Internal server error' });
//   }
// });

// // Test Route
// app.get("/", (req, res) => {
//   res.send("Hello World! API is running");
// });

// const PORT = process.env.PORT || 5001;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import fileRoutes from "./routes/files.js"; // Import using ES Modules

// const app = express();

// // Middleware
// app.use(express.json());
// app.use(cors());

// app.get("/", (req, res) => {
//   res.send("hellow orld");
//   console.log("hello");
// });

// // Routes
// app.use("/api/files", fileRoutes);

// // Connect to MongoDB
// mongoose.connection.once("open", () => {
//   console.log(`Connected to database: ${mongoose.connection.db.EngPrep}`);
// });

// mongoose
//   .connect("mongodb://127.0.0.1:27017/EngPrep", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB Connected"))
//   .catch((err) => console.error("MongoDB Connection Error:", err));

// // Start Server
// const PORT = process.env.PORT || 5000; // Change from 4001 to 5000

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import fileRoutes from "./routes/files.js"; // Import using ES Modules
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js";
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}

));
app.use(cookieParser());


app.get("/", (req, res) => {
  res.send("hellow orld");
  console.log("hello");
});

// Routes
app.use("/api/files", fileRoutes);
app.use("/api/auth", authRoutes);

// Connect to MongoDB
mongoose.connection.once("open", () => {
  console.log(`Connected to database: ${mongoose.connection.db.databaseName}`);
});

mongoose
  .connect("mongodb://127.0.0.1:27017/EngPrep", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

// Start Server
const PORT = process.env.PORT || 5000; // Change from 4001 to 5000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
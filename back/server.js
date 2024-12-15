const express = require("express");
const cors = require("cors"); // Import CORS middleware
const connectDB = require("./database/db"); // Database connection file
const projectRoutes = require("./routes/projectRoutes"); // Routes for "projects"

const app = express();

// Middleware
app.use(cors()); // Enable CORS for cross-origin requests
app.use(express.json()); // Parse JSON request bodies

// Connect to the database
connectDB();

// Routes
app.use("/api/projects", projectRoutes); // Prefix all project routes with /api/projects

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

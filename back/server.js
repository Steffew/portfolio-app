const express = require("express");
const cors = require("cors");
const connectDB = require("./database/db");
const projectRoutes = require("./routes/projectRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

connectDB();

// Routes
app.use("/api/projects", projectRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

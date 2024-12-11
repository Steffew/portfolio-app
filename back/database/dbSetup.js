// Use this script to initialize the "portfolio" database. If it doesn't exist, a connection attempt will fail until a write operation creates it.
// MongoDB creates databases only when a write operation occurs. This script ensures the "portfolio" database is created by adding a sample project.

const mongoose = require("mongoose");
const Project = require("../models/projectSchema");

const initializeDatabase = async () => {
  try {
    console.log("Connecting to database...");
    const connection = await mongoose.connect(
      "mongodb://admin:adminpassword@localhost:27017/admin"
    );

    const projectsDb = connection.connection.useDb("portfolio");
    const ProjectInProjectsDb = projectsDb.model("Project", Project.schema);

    const sampleProject = new ProjectInProjectsDb({
      title: "Sample Project",
      image_url: "https://example.com/sample-image.png",
      slug: "sample-project",
      description: "This is a sample project description.",
      content: "Detailed content for the sample project.",
    });

    const result = await sampleProject.save();
    console.log("Sample project added to 'projects' database:", result);

    mongoose.connection.close();
  } catch (error) {
    console.error("Error during database setup:", error.message);
    process.exit(1);
  }
};

initializeDatabase();

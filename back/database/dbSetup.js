const mongoose = require("mongoose");
const Project = require("../models/projectSchema");

const initializeDatabase = async () => {
  const MONGO_DB = process.env.MONGO_DB || "portfolio";
  const MONGO_USER = process.env.MONGO_USER || "admin";
  const MONGO_PASSWORD = process.env.MONGO_PASSWORD || "adminpassword";

  const MONGO_URI = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@mongo:27017/${MONGO_DB}?authSource=admin`;

  try {
    console.log("Connecting to database...");
    const connection = await mongoose.connect(MONGO_URI);

    const projectsDb = connection.connection.useDb(MONGO_DB);
    const ProjectInProjectsDb = projectsDb.model("Project", Project.schema);

    const sampleProject = new ProjectInProjectsDb({
      title: "Sample Project",
      image_url: "https://picsum.photos/720/1280",
      slug: new mongoose.Types.ObjectId().toString(),
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

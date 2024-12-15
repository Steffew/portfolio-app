const express = require("express");
const mongoose = require("mongoose");
const Project = require("../models/projectSchema");
const router = express.Router();

// Get All
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get
router.get("/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ error: "Project not found" });
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create
router.post("/", async (req, res) => {
  try {
    const { title, image_url, slug, description, content } = req.body;
    if (!title || !image_url || !slug || !description || !content) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const project = new Project({
      title,
      image_url,
      slug,
      description,
      content,
    });
    const savedProject = await project.save();
    res.status(201).json({ success: true, project: savedProject });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update
router.put("/:id", async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!project) return res.status(404).json({ error: "Project not found" });
    res.status(200).json({ success: true, project });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete
router.delete("/:id", async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    return res.status(400).json({ error: "Invalid project ID" });
  }
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) return res.status(404).json({ error: "Project not found" });
    res
      .status(200)
      .json({ success: true, message: "Project deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

const express = require("express");
const mongoose = require("mongoose");
const request = require("supertest");
const { MongoMemoryServer } = require("mongodb-memory-server");
const Project = require("../models/projectSchema");
const projectRoutes = require("../routes/projectRoutes");

let app;
let mongoServer;

// Initialize Mock Server and App
beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();
    await mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

    app = express();
    app.use(express.json());
    app.use("/projects", projectRoutes);
});

// Cleanup after Tests
afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongoServer.stop();
});

// Test Cases
describe("Project Routes", () => {
    let testProject;

    beforeEach(async () => {
        // Seed a test project
        testProject = await Project.create({
            title: "Test Project",
            image_url: "https://example.com/image.jpg",
            slug: "test-project",
            description: "This is a test project",
            content: "Detailed content for the test project",
        });
    });

    afterEach(async () => {
        await Project.deleteMany(); // Clear database after each test
    });

    test("GET /projects - should fetch all projects", async () => {
        const response = await request(app).get("/projects");
        expect(response.status).toBe(200);
        expect(response.body.length).toBe(1);
        expect(response.body[0].title).toBe("Test Project");
    });

    test("GET /projects/:id - should fetch a single project by ID", async () => {
        const response = await request(app).get(`/projects/${testProject._id}`);
        expect(response.status).toBe(200);
        expect(response.body.title).toBe("Test Project");
    });

    test("POST /projects - should create a new project", async () => {
        const newProject = {
            title: "New Project",
            image_url: "https://example.com/new.jpg",
            slug: "new-project",
            description: "This is a new project",
            content: "Detailed content for the new project",
        };

        const response = await request(app).post("/projects").send(newProject);
        expect(response.status).toBe(201);
        expect(response.body.project.title).toBe("New Project");
    });

    test("PUT /projects/:id - should update an existing project", async () => {
        const updatedData = { title: "Updated Project" };
        const response = await request(app).put(`/projects/${testProject._id}`).send(updatedData);
        expect(response.status).toBe(200);
        expect(response.body.project.title).toBe("Updated Project");
    });

    test("DELETE /projects/:id - should delete a project", async () => {
        const response = await request(app).delete(`/projects/${testProject._id}`);
        expect(response.status).toBe(200);
        expect(response.body.message).toBe("Project deleted successfully");

        // Ensure project is deleted
        const check = await Project.findById(testProject._id);
        expect(check).toBeNull();
    });
});

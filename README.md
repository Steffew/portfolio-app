# Portfolio App with Docker

This is a full-stack portfolio application containerized using Docker, making it easy to run the entire stack with just a single command. It features a **SvelteKit** frontend, a **Node.js** backend, and a **MongoDB** database. Designed with flexibility in mind, it uses dynamic slugs for content handling and can be easily customized or expanded for personal projects, portfolios, or creative showcases.

## 📦 Project Structure
```
portfolio-app/
├── back/                    # Backend Node.js service
│   ├── database/            # MongoDB setup and connection
│   ├── Dockerfile
│   └── src/ (Node.js code)
├── front/                   # SvelteKit Frontend service
│   ├── src/                 # Svelte source code
│   ├── Dockerfile
│   └── svelte.config.js
├── docker-compose.yml       # Docker stack definition
└── README.md                # You're here!
```

---

## 🚀 Getting Started

### Prerequisites
Ensure you have **Docker Desktop** installed and running.

### Run the Application
```bash
docker-compose up --build
```
This will:
- Build the **frontend**, **backend**, and **MongoDB** services.
- Launch the app at.

### Stop the Application
```bash
docker-compose down
```

---

## 🔧 Environment Configuration
The application comes with default credentials already set in the `docker-compose.yml` file:

```yaml
MONGO_DB=portfolio
MONGO_USER=admin
MONGO_PASSWORD=adminpassword
MONGO_AUTH_DB=admin
```

Feel free to edit these values directly in the `docker-compose.yml` file if needed.

---

## 📦 Services Explained

### 1. Frontend (SvelteKit)
- Built using **SvelteKit** with `adapter-static` for a single-page application (SPA) experience.
- Served using a lightweight **Node.js `serve`** server.

### 2. Backend (Node.js + Express)
- Built with **Node.js** and **Express**.
- Connects to MongoDB using **Mongoose** for easy database interaction.

### 3. MongoDB
- Official **MongoDB Docker image**.
- Initializes with default credentials on the first run.

---

##📄 Information

This project is open-source, so feel free to modify, improve, or customize it as needed for your own projects!

This project does not have any authentication, but you can easily implement one yourself based on your requirements.
This project is open-source, so feel free to modify, improve, or customize it as needed for your own projects!

---

✅ **You're all set!** Clone the repo, run the stack, and start showcasing your work! 🚀


const express = require('express');
const app = express();
const routes = require("./route/new");

const PORT = 5402;

// Middleware to parse JSON requests
app.use(express.json());

// CORS middleware - Place this before your routes
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // No trailing slash
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// Use your routes
app.use("/", routes);

// Handle 404 for unknown routes
app.use((req, res) => {
    res.status(404).json({ message: "Routes not found" });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


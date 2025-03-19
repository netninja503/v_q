const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;  // Use dynamic port for Vercel

// Serve static files from "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Serve login page by default
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));  // Make sure login.html is now index.html
});

// Serve dashboard page
app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));  // Rename "index.html" to "dashboard.html"
});

// Serve teacher's upload page
app.get('/v', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'v.html'));
});

// Export Express app as a Vercel function
module.exports = app;

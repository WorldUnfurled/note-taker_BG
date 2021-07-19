// Imports
const express = require('express');
const fs = require('fs');
const path = require('path');
const noteRoutes = require('./notes');

// Express call
const app = express();

// Port specification
const PORT = process.env.PORT || 8080;

// Express encoding
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Loads static files in public folder
app.use(express.static("public"));
app.use('/api', noteRoutes);

// Notes Route
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '/public/notes.html')));

// Home Route
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));

// Listener (Port 8080)
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

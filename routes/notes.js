const express = require('express');
const router = express.router();

// Routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html'))); // Home

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '/public/notes.html'))); // Notes

app.get('/api/notes', (req, res) => res.json(path.join(__dirname, '/db.json'))); // API


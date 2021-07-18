const path = require('path');
const express = require('express');
const router = express.Router();

// Routes

router.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/notes.html'))); // Notes

router.get('/api/notes', (req, res) => res.json(path.join(__dirname, './db.json'))); // API

module.exports = router;


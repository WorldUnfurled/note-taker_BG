// Imports
const express = require('express');
const fs = require('fs');
const path = require('path');

// Express call
const app = express();

// Port specification
const PORT = process.env.PORT || 8080;

// Express encoding
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Loads static files in public folder
app.use(express.static("public"));

// Routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html'))); // Home

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '/public/notes.html'))); // Notes

app.get('/api/notes', (req, res) => res.json(path.join(__dirname, '/db.json'))); // API

// const notes = [];

app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    console.log(req.body);

    newNote.routeName = newNote.name;

    // notes.push(newNote);

    fs.appendFile(path.join(__dirname, '/db.json'), JSON.stringify(newNote), (err) => {
        if (err) throw err;
    });

    res.json(newNote);
});

// Listener
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

// console.log(__dirname) = ...\note-taker_BG

// Imports
const express = require('express');
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
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '/public/notes.html')));


// Listener
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

// console.log(__dirname) = ...\note-taker_BG

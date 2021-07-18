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

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '/public/notes.html')));

// console.log(__dirname) = ...\note-taker_BG

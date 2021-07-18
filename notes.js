const path = require('path');
const express = require('express');
const router = express.Router();

const notes = [
    {
        title: "Test Title",
        text: "Test text"
    }
]

// Routes

router.get('/', (req, res) => {
    console.log(notes);
    res.sendFile(path.join(__dirname, '/public/notes.html'))
});


router.post('/', (req, res) => {
    console.log(notes);
    console.log(req.body);
    res.send('POSTED');
});
// router.get('/api/notes', (req, res) => res.json(path.join(__dirname, './db.json'))); // API

module.exports = router;


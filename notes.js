const path = require('path');
const express = require('express');
const router = express.Router();
const uuid = require('uuid');

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
    
    const note = req.body;

    const noteID = uuidv4();

    const orderedNote = { ...note, id: noteID } // Using spread to add id

    notes.push(orderedNote);

    console.log(notes);

    res.send(`Note '${note.title}' added.`);
});
// router.get('/api/notes', (req, res) => res.json(path.join(__dirname, './db.json'))); // API

module.exports = router;


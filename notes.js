//Imports
const path = require('path');
const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const fs = require('fs');

let JSONotes = require('./db.json');

// Routes

// Adds ID to note and pushes that note to the db file and writes it there
router.post('/notes', (req, res) => {
    
    const note = req.body;

    const noteID = uuid.v4();

    const orderedNote = { ...note, id: noteID } // Using spread to add id
    console.log(JSONotes);
    JSONotes.push(orderedNote);
    console.log(JSONotes);
    fs.writeFile(path.join(__dirname, '/db.json'), JSON.stringify(JSONotes), (err) => {
        if (err) throw err;
    });

    res.end();
    //WRITE TO DB JSON FILE
});

// Renders json notes
router.get('/notes', (req, res) => res.json(JSONotes));

//Export
module.exports = router;


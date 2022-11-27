const fs = require('fs');
const chalk = require('chalk');
const addnote = require('./add_notes.js');
const { title } = require('process');

const read_notes = function (title) {
    console.log(title);
    const notes = addnote.loadNotes();

    const findNote = notes.find((findNote) => findNote.title === title);
    if (findNote) {
        console.log(findNote.body); //note with name title exist;
    } else {
        console.log(chalk.red.inverse('No note match!'));
    }
}

module.exports = {
    read_notes
}
const fs = require('fs');
const chalk = require('chalk');
const addnote = require('./add_notes.js');
const { title } = require('process');

const read_notes = function (title) {
    const notes = addnote.loadNotes();

    const findNote = notes.find((findNote) => findNote.title === title);
    if (findNote) {
        console.log('Title: ' + findNote.title);
        console.log('Content: ' + findNote.body); //note with name title exist;
    } else {
        console.log(chalk.red('No note match your title!'));
    }
}

module.exports = {
    read_notes
}
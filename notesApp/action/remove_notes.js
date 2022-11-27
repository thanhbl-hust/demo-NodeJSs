const fs = require('fs');
const chalk = require('chalk');
const addnote = require('./add_notes.js')



const removeNotes = function (title) {
    console.log(title);
    const notes = addnote.loadNotes();
    const notesToKeep = notes.filter(function (notes) {
        return notes.title !== title;
    })

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Delete note success!'));
        addnote.saveNotes(notesToKeep);
    } else {
        console.log(chalk.red.inverse('No note match your title!'));
    }
}


module.exports = {
    removeNotes
}
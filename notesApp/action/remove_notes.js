const fs = require('fs');
const chalk = require('chalk');
const addnote = require('./add_notes.js')



const removeNotes = function (title) {
    console.log(`Notes you want to delete: "${title}"`);
    const notes = addnote.loadNotes();
    const notesToKeep = notes.filter(function (notes) {
        return notes.title !== title;
    })

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green('Delete note success!'));
        addnote.saveNotes(notesToKeep);
    } else {
        console.log(chalk.red('No note match your title!'));
    }
}


module.exports = {
    removeNotes
}
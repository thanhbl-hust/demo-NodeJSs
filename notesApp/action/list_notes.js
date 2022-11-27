const fs = require('fs');
const chalk = require('chalk');
const addnote = require('./add_notes.js')


const listNode = () => {

    const JSform = addnote.loadNotes();
    console.log(chalk.white('Your note:'));


    if (JSform.length === 0) {
        console.log(chalk.red.inverse('No note exist!'));
    } else {
        JSform.forEach((note) => {
            console.log(note.title + ": " + note.body);
        })
    }
}


module.exports = {
    listNode
}
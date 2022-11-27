const fs = require('fs');
const chalk = require('chalk');
const addnote = require('./add_notes.js')


const listNode = () => {

    const JSform = addnote.loadNotes();
    console.log(chalk.white('-----List your notes-----'));

    var count = 1;

    if (JSform.length === 0) {
        console.log(chalk.red('Error: No note exist!'));
    } else {
        JSform.forEach((note) => {
            console.log(`Note ${count}:`);
            console.log(`- Title: ${note.title}`);
            console.log(`- Content: ${note.body}`);
            count += 1;
        })
    }
}


module.exports = {
    listNode
}
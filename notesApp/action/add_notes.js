const fs = require('fs');
const chalk = require('chalk');

const addNote = function (title, body) {
    const notes = loadNotes();

    console.log(`Note name: ${title}`);
    // console.log(notes);


    //check title

    const duplicate = notes.filter(function (notes) {
        return notes.title === title;
    })

    if (duplicate.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        //console.log(notes);
        console.log(chalk.green('Add note success!'));
        saveNotes(notes);
    } else {
        console.log(chalk.red('Note title already exist!'));
    }
}



const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('./data/notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        //noFile name notes.json;
        return [];
    }
}


const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('./data/notes.json', dataJSON);
}


module.exports = {
    addNote,
    saveNotes,
    loadNotes
}
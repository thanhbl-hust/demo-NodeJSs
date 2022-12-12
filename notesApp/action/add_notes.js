const fs = require('fs');
const chalk = require('chalk');


const loadNotes = function () {
    //hàm loadNotes để lấy thông tin trong db;
    try {
        const dataBuffer = fs.readFileSync('./data/notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        //if noFile name notes.json;
        return [];
    }
}


const addNote = function (title, body) {
    const notes = loadNotes(); //loadNotes;

    console.log(`Note name: ${title}`);
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


const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('./data/notes.json', dataJSON); //ghi de
}


module.exports = {
    addNote,
    saveNotes,
    loadNotes
}
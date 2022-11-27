//main

//call npm packpages;
const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');

//like import in python
const notes = require('./action/add_notes.js');
const readnote = require('./action/readnotes.js');
const remove_notes = require('./action/remove_notes.js');
const list_notes = require('./action/list_notes.js');


//test validator functions;
//console.log(validator.isURL('www.google.com'));
//console.log(validator.isEmail('lamthanhbui02@gmail.com'));
//---------------------
//test chalk functions;
//console.log(chalk.green.inverse('Adding a file!'));
//console.log(chalk.red.inverse('Removing a file!'));

//take input from user;
//console.log(process.argv);

console.log(chalk.green('Using command to edit notes'));
console.log(chalk.white('* add --title=title --body=body //add a note'));
console.log(chalk.white('* rm --title=title //remove a note'));
console.log(chalk.white('* ls //list all notes'));
console.log(chalk.white('* read --title=title //read content of a note'));
console.log(chalk.white('-----------------------------------------------'));


yargs.version('1.1.0'); //change version;
//add, remove, read, list;

//add function;
yargs.command({
    command: 'add',
    describe: 'Adding a new note!',
    builder: {
        title: {
            describe: 'Title of note',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body of note',
            demandOption: true, //default = false;
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body);
    }
})

//remove function
yargs.command({
    command: 'rm',
    describe: 'Removing a new note!',
    builder: {
        title: {
            describe: 'Delete a note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        remove_notes.removeNotes(argv.title);
    }
})

//list function
yargs.command({
    command: 'ls',
    describe: 'Listing all your note!',
    handler: function () {
        list_notes.listNode();
    }
})


//read function
yargs.command({
    command: 'read',
    describe: 'Reading a note!',
    builder: {
        title: {
            describe: 'Read a note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        readnote.read_notes(argv.title);
    }
})
yargs.parse();










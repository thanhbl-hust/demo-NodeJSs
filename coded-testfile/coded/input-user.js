const chalk = require('chalk');
const yargs = require('yargs');



const command = process.argv[2];

if (command === 'add') {
    console.log(chalk.green.inverse('Adding a note!'));

} else if (command === 'rm') {
    console.log(chalk.red('Removing a note!'));
}

//console.log(process.argv);


//-------------------YARGS-----------------------
yargs.version('1.1.0'); //change version;
//add, remove, read, list;

//add command;
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
        console.log('Title: ' + argv.title);
        console.log('Body: ' + argv.body);
    }
})





yargs.command({
    command: 'rm',
    describe: 'Removing a new note!',
    handler: function () {
        console.log(chalk.red.inverse('Removing a new note!'));
    }
})

yargs.command({
    command: 'ls',
    describe: 'Listing all your note!',
    handler: function () {
        console.log(chalk.white('Listing all your note!'));
    }
})

yargs.command({
    command: 'read',
    describe: 'Reading a note!',
    handler: function () {
        console.log(chalk.white('Reading a note!'));
    }
})


//console.log(yargs.argv);


//Storing Data;




yargs.parse();
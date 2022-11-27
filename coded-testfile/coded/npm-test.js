const validator = require('validator');
const chalk = require('chalk');

//test validator functions;
console.log(validator.isURL('www.google.com'));
console.log(validator.isEmail('lamthanhbui02@gmail.com'));
//---------------------
//test chalk functions;
console.log(chalk.green.inverse('Adding a file!'));
console.log(chalk.red('Removing a file!'));
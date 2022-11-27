//console.log("Hello World!");

const fs = require('fs');

fs.writeFileSync('test.txt', 'My name is Lam Thanh.');

fs.appendFileSync('test.txt', ' And I am 20 years old!');
//-------

const importFile = require('./imports/import.js');

//importFile.printName_('Lam Thanh 17');
//console.log(name);



const minus = importFile.minusNum(4, 5);
//console.log(minus);

const addNumber = importFile.add(1, 2);
//console.log(addNumber);

///TAKE USER INPUT TEST
console.log(process.argv);
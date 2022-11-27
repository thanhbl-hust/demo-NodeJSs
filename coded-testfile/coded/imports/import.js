console.log("Hello, you are learning import files.");

const add = function (a, b) {
    return a + b;
}

function printName_(myName) {
    console.log(myName);
}

function minusNum(a, b) {
    return a - b;
}

module.exports = {
    printName_,
    add,
    minusNum
}

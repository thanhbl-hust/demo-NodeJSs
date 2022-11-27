// //using JSON.stringify(object) to change obj to string;
// //using JSON.parse(string(oj)) to change string to object;

// //storing Data under string type value;

// const fs = require('fs');


// // const infor = { //This is an object;
// //     myName: 'Lam Thanh',
// //     age: 20,
// //     location: 'HaNoi'
// // }

// // const data = JSON.stringify(infor); //data is JSON string represent;

// // fs.writeFileSync('data.json', data)

// // console.log(typeof data); //string


// //const object1 = JSON.parse(data);
// //console.log(object1.myName);

// const data_string = fs.readFileSync('data.json');

// const changeData = JSON.parse(data_string);

// changeData.name = "Quang Lam";
// const str_value = JSON.stringify(changeData);

// // fs.writeFileSync('data.json', str_value);

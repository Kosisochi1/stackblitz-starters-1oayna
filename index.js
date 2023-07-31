const fs = require('fs');
const path = require('path');
console.log(__dirname);
//This created the folder!!!
// const filepath = path.join(__dirname, 'Student');
// fs.mkdir(filepath, (err, res) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log('you are there ');
// });
// This created the file !!!
// const filepath = path.join(__dirname, 'Student', 'user.js');
// fs.writeFile(filepath, '', (err, res) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
// //   console.log('you are good');
const newName = path.join(__dirname, 'Names', 'user.js');
// // });
// fs.rename(filepath, newName, (err, res) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log('we are good');
// });
const myName = 'Emmanuel Kosisochukwu Ezeoyiri';
fs.writeFile(newName, myName, (err, res) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('The content added successfully');
});

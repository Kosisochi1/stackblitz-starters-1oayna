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
// // });
// const myName = 'Name: Emmanuel Kosisochukwu Ezeoyiri';
// fs.writeFile(newName, myName, (err, res) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log('The content added successfully');
// });

// const UpDatedContent = `\nAge:25years\n
//     Sex:Male\n
//     Nationality:Nigerian\n
//     Phone:07033751434\n
//     Hobby: Football`;

// fs.appendFile(newName, UpDatedContent, (err, res) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log('Content update');
// });
// console.log('come\n go home\n come again');
fs.rename
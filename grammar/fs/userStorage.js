const fs = require('fs');
const filePath = './file/user1.json';
let input = fs.readFile(filePath);
console.log(input);

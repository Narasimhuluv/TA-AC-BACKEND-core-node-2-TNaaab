let relativePath = '../client/index.js';
console.log(relativePath);

let path = require('path');
let absolutePath = path.join(__dirname, './index.js');
console.log(absolutePath);

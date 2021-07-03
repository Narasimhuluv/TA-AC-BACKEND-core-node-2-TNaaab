//  absolute path
let path = require('path');
let pathApp = path.join(__dirname, 'app.js');
console.log(pathApp);

// relative path
let relativePath = './index.html';
console.log(relativePath);

// absolute path
let pathIndex = path.join(__dirname, 'index.html');
console.log(pathIndex);

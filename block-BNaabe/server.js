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

let http = require('http');
let qs = require('querystring');
let server = http.createServer((req, res) => {
  console.log(req.method, req.url);

  //   if (req.method === 'POST' && req.url === '/') {
  let store = '';
  req.on('data', (chunk) => {
    store += chunk;
  });
  req.on('end', () => {
    console.log(store);
    let parsedData = qs.parse(store);
    res.statusCode = 201;
    res.end(JSON.stringify(parsedData));
  });
  //   }
});

server.listen(9000, () => {
  console.log('server is running on port 9k');
});

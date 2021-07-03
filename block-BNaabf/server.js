let relativePath = './index.js';
console.log(relativePath);

let path = require('path');
let absolutePath = path.join(__dirname, './index.js');
console.log(absolutePath);

let http = require('http');
let file = require('fs');
let qs = require('querystring');

let server = http.createServer((req, res) => {
  console.log(req.method, res.url);
  let dataFormate = req.headers['content-type'];
  let store = '';
  req.on('data', (chunk) => {
    store += chunk;
  });
  req.on('end', () => {
    if (req.method === 'GET' && req.url === '/form') {
      res.setHeader('Content-Type', 'text/html');
      res.end(store);
      file.createReadStream('./form.html').pipe(res);
      res.end(store);
    } else if (req.method === 'POST' && req.url === '/form') {
      if (dataFormate === 'x-www-form-urlencoded') {
        let parsedData = qs.parse(store);
        res.setHeader('Content-Type', 'text/html');
        res.end(
          `</h1>${parsedData.name}</h1><p>${parsedData.emial}</p><p>${parsedData.age}</p>`
        );
      }
    }
  });
});

server.listen(5678, () => {
  console.log('sever is running on port 5678');
});

let http = require('http');
let file = require('fs');

let server = http.createServer((req, res) => {
  console.log(req.method, req.url);
  res.setHeader('Content-Type', 'text/plain');
  file.createReadStream('./readme.txt').pipe(res);
});
server.listen(5000, () => {
  console.log('server port is running fine');
});

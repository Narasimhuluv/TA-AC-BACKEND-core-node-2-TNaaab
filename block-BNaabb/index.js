let http = require('http');
let server = http.createServer((req, res) => {
  let store = '';
  req.on('data', (chunk) => {
    store = store + chunk;
  });
  req.on('end', () => {
    console.log(store);
  });
});
server.listen(3456, () => {
  console.log('server is running on port 3456');
});

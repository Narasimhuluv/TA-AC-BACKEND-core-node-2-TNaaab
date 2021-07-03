let http = require('http');
let qs = require('querystring');
let server = http.createServer((req, res) => {
  console.log(req.method, req.url);
  let dataFormate = req.headers['content-type'];
  let store = '';
  req.on('data', (chunk) => {
    store += chunk;
  });
  req.on('end', () => {
    if (dataFormate === 'application/json') {
      let parsedData = JSON.parse(store);
      res.end(parsedData);
    } else if ((dataFormate = 'application/x-www-form-urlencoded')) {
      let parsedData = qs.parse(store);
      res.end(JSON.stringify(parsedData));
    }
  });
});
server.listen(3000, () => {
  console.log('server is running on port 3000');
});

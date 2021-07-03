let http = require('http');
let qs = require('querystring');
let server = http.createServer((req, res) => {
  console.log(req.method, req.url);
  console.log(req.headers);
  let dataFormate = req.headers['content-type'];
  let store = '';
  req.on('data', (chunk) => {
    store += chunk;
  });
  req.on('end', () => {
    if (req.method === 'POST' && req.url === 'application/json') {
      res.statusCode = 201;
      console.log(store);
      res.setHeader('content-type', 'application/json');
      res.end(store);
    } else if (
      req.method === 'POST' &&
      req.url === 'application/x-www-form-urlencoded'
    ) {
      res.statusCode = 201;
      res.setHeader('content-type', 'form');
      let parsedData = qs.parse(store);
      res.end(JSON.stringify(parsedData));
      console.log(JSON.stringify(parsedData));
    }
  });
});

// let server = http.createServer((req, res) => {
//   console.log(req.method, req.url);
//   console.log(req.headers);
//   let dataFormate = req.headers['content-type'];
//   let store = '';
//   req.on('data', (chunk) => {
//     store += chunk;
//   });
//   req.on('end', () => {
//     if (dataFormate === 'application/json') {
//       let parsedData = JSON.parse(store);
//       res.end(store);
//     } else if ((dataFormate = 'application/x-www-form-urlencoded')) {
//       let parsedData = qs.parse(store);
//       res.setHeader('content-type', '/form');
//       res.end(JSON.stringify(parsedData));
//     }
//   });
// });

server.listen(9000, () => {
  console.log('server is running on port 9000');
});

'use strict';

var http = require('http');
var fs = require('fs');
var path = require('path');

var indexHtmlContent = fs.readFileSync(path.join(__dirname, '/../../dist/index.html'));

http.createServer(function (req, res) {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(indexHtmlContent);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
}).listen(8080);

console.log('Server running at http://127.0.0.1:8080/');


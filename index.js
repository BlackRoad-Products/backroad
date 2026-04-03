const http = require('http');
const port = process.env.PORT || 3000;
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type':'text/html'});
  res.end('<h1>backroad.blackroad.io</h1><p>Pave Tomorrow.</p>');
}).listen(port, () => console.log('backroad on port ' + port));

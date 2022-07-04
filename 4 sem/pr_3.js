const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url.startsWith('/login')) {
    return res.end('214083')
  }
  if (req.url.startsWith('/hour')) {
    return res.end('13')
  }
});

server.listen(2000);

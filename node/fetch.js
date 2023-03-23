//reading from file and displaying on server
const http = require("http");
const url = require("url");
const fs = require("fs");
const server = http.createServer();
server.on("request", (req, res) => {
  const fs = require("fs");
  fs.readFile("read.txt", (err, data) => {
    if (err) return console.error(err);
    res.end(data.toString());
  });
});

server.listen(8000, "127.0.0.1");

var http = require("http");
var fs = require("fs");
var url = require("url");

http
  .createServer(function(req, res) {
    var q = url.parse(req.url, true);
    var task = q.pathname;
    if (task === "/get") {
      fs.readFile("data.json", function(err, data) {
        res.writeHead(200, {
          "Content-Type": "text/html",
          "Access-Control-Allow-Origin": "*"
        });
        res.write(data);
        res.end();
      });
    }

    if (task === "/post") {
      let body = "";
      req.on("data", chunk => {
        body += chunk.toString();
      });
      req.on("end", () => {
        fs.writeFile("data.json", body, function(err) {
          if (err) throw err;
        });
        res.writeHead(200, {
          "Content-Type": "text/html",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*"
        });
        res.write("ok!");
        res.end();
      });
    }
  })
  .listen(3005);

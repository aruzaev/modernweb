const path = require("path");
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // Define the file path to the HTML file
  const filePath = path.join(__dirname, "/file", "index.html");

  // Read the HTML file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      // If there is an error, send a 500 response
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Server Error");
    } else {
      // Send the HTML content with a 200 OK status
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(content);
    }
  });
});

server.listen(5000, "localhost", () => {
  console.log("Server is running on port 5000");
});

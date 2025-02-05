const http = require('http');

const server = http.createServer((req, res) => {
  // This is where the bug lies
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');

  //Attempting to write to the response after it has ended leads to an error.
  setTimeout(() => {
    res.write('This will not be sent');
  }, 100);
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
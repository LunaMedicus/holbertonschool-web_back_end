#!/usr/bin/node
const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const dbPath = process.argv[2] || '';

    const originalLog = console.log;
    const logLines = [];
    console.log = (...args) => {
      logLines.push(args.join(' '));
    };

    countStudents(dbPath)
      .then(() => {
        console.log = originalLog;
        res.end(`This is the list of our students\n${logLines.join('\n')}`);
      })
      .catch((err) => {
        console.log = originalLog;
        res.end(`This is the list of our students\n${err.message}`);
      });
  }
});

app.listen(1245);

module.exports = app;

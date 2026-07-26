#!/usr/bin/node
const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const dbPath = process.argv[2] || '';

  const originalLog = console.log;
  const logLines = [];
  console.log = (...args) => {
    logLines.push(args.join(' '));
  };

  countStudents(dbPath)
    .then(() => {
      console.log = originalLog;
      res.send(`This is the list of our students\n${logLines.join('\n')}`);
    })
    .catch((err) => {
      console.log = originalLog;
      res.send(`This is the list of our students\n${err.message}`);
    });
});

app.listen(1245);

module.exports = app;

const express = require('express');
const cors = require('cors');

const app = express();
const results = require('../data.js')

app.use(express.json());
app.use(cors());

app.get('/cakes', (req, res) => {
    res.send(results.cakes);
  });

  app.get('/fruits', (req, res) => {
    res.send(results.fruits);
  });

  app.get('/cookies', (req, res) => {
    res.send(results.cookies);
  });

  app.get('/cakes/random', (req, res) => {
    let randID = Math.floor(Math.random()*10);
    res.send(results.cakes[randID]);
  });

  app.get('/fruits/random', (req, res) => {
    let randID = Math.floor(Math.random()*10);
    res.send(results.fruits[randID]);
  });

  app.get('/cookies/random', (req, res) => {
    let randID = Math.floor(Math.random()*10);
    res.send(results.cookies[randID]);
  });

module.exports = app;

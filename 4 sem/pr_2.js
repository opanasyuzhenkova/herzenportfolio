const express = require('express');
const app = express();
app.use(express.text());

function task(x){ 
  return x * Math.pow(x, 2); 
};

app.get('/login/', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Content-Type', 'text/plain; charset=UTF-8')
  res.send('214083')}
  
);

app.get('/sample/', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Content-Type', 'text/plain; charset=UTF-8')
  res.send('function task(x){ return x * Math.pow(x,2); };')}
  
);

app.listen();

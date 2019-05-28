const express = require('express');
const mysql = require('mysql');

const api = express();
api.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  next();
})

const connection = mysql.createConnection({
  database: "amazon",
  host: "localhost",
  user: "root",
  password: "Bptst%988"
});

connection.connect((err) => {
  if(err) throw err;
  console.log("You're connected.");
})

api.get('/articles', (req, res) => {
  connection.query('SELECT * FROM articles', (err, result) => {
    if (err) throw err;
    res.send(result);
    console.log("Result: " + result);
  });
});

api.get('/articles/filter?', (req, res) => {
  if(req.query.price) {
    if(req.query.price === "asc") {
      connection.query('SELECT * FROM articles ORDER BY price ASC',(err, result) => {
        if (err) throw err;
        res.send(result);
      });
    } else if(req.query.price === "desc") {
      connection.query('SELECT * FROM articles ORDER BY price DESC',(err, result) => {
        if (err) throw err;
        res.send(result);
      });
    } else {
      res.sendStatus(400);
    }
  } else {
    res.sendStatus(400);
  }
});

api.get('/', (req, res) => {
  res.send('workin bro');
})

api.listen(8000,(err) => {
 if(err) throw err;
   console.log('API is running.');
})
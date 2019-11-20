var express = require('express');
var app = express();
const port = process.env.PORT || 3210;
const cors = require('cors');

const fs = require('fs');
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({extended: false});
const path = require('path');

const mysql = require('mysql2');
const pool = mysql.createPool({
  host: "zanner.org.ua",
  port: "33321",
  user: "ka7608",
  password: "123456",
  database: "music"
});

app.use(cors());

app.get("/tracks", function(req, res){
    pool.query("SELECT * FROM Track", function(err, data) {
      if(err) {
          return console.log(err);
      }
      res.json(data);
      console.log(data);
    });
});

app.get("/users", function(req, res){
  pool.query("SELECT * FROM t_user", function(err, data) {
    if(err) {
        return console.log(err);
    }
    res.json(data);
    console.log(data);
  });
});

app.listen(port);

console.log(`App is listening on ${port}`);
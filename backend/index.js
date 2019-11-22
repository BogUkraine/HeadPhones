var express = require('express');
var app = express();
const port = process.env.PORT || 3210;
const cors = require('cors');

const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({extended: false});

const mysql = require('mysql2');
const pool = mysql.createPool({
  host: "zanner.org.ua",
  port: "33321",
  user: "ka7608",
  password: "123456",
  database: "music"
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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
	});
});

app.post("/users", function(req, res){

	const user = {
		user_id: req.body.user_id,
		user_name: req.body.user_name,
		user_password: req.body.user_password,
		user_login: req.body.user_login
	}

	pool.query('INSERT INTO t_user SET ?', user, (error, result) => {
        if (error) throw error;
    });

	console.log('Adding new user: ', user);

	res.send(user);
});


app.get("/albums", function(req, res){
	pool.query("SELECT * FROM album", function(err, data) {
		if(err) {
			return console.log(err);
		}
		res.json(data);
		console.log(data);
	});
});

app.get("/genres", function(req, res){
	pool.query("SELECT * FROM genre", function(err, data) {
		if(err) {
			return console.log(err);
		}
		res.json(data);
	});
});

app.get("/playlists", function(req, res){
	pool.query("SELECT * FROM t_playlist", function(err, data) {
		if(err) {
			return console.log(err);
		}
		res.json(data);
		console.log(data);
	});
});

app.get("/singers", function(req, res){
	pool.query("SELECT * FROM singer", function(err, data) {
		if(err) {
			return console.log(err);
		}
		res.json(data);
		console.log(data);
	});
});

app.listen(port);

console.log(`App is listening on ${port}`);
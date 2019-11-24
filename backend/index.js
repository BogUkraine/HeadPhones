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

//    GET_METHODS     //

app.get("/tracks", function(req, res){
    pool.query("SELECT * FROM tracks", function(err, data) {
      if(err) {
          return console.log(err);
      }
      res.json(data);
      //console.log(data);
    });
});

app.get("/users", function(req, res){
	pool.query("SELECT * FROM users", function(err, data) {
		if(err) {
			return console.log(err);
		}
		res.json(data);
	});
});

app.get("/albums", function(req, res){
	pool.query("SELECT * FROM albums", function(err, data) {
		if(err) {
			return console.log(err);
		}
		res.json(data);
		//console.log(data);
	});
});

app.get("/genres", function(req, res){
	pool.query("SELECT * FROM genres", function(err, data) {
		if(err) {
			return console.log(err);
		}
		res.json(data);
	});
});

app.get("/playlists", function(req, res){
	pool.query("SELECT * FROM playlists", function(err, data) {
		if(err) {
			return console.log(err);
		}
		res.json(data);
		//console.log(data);
	});
});

app.get("/singers", function(req, res){
	pool.query("SELECT * FROM singers", function(err, data) {
		if(err) {
			return console.log(err);
		}
		res.json(data);
		//console.log(data);
	});
});

app.get("/quotes", function(req, res){
	pool.query("SELECT * FROM quotes", function(err, data) {
		if(err) {
			return console.log(err);
		}
		res.json(data);
		//console.log(data);
	});
});

//    POST_METHODS     //

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

app.get("/tracks/joined", function(req, res){

	pool.query(
		`SELECT
		tr.track_id, tr.track_link, tr.track_name, tr.track_time,
		al.album_name, al.album_year, al.album_img,
		sn.singer_name,
		gn.genre_name
		From ((tracks tr JOIN genres gn USING(genre_id)) JOIN albums al USING(album_id))
		JOIN singers sn USING(singer_id)`,
		function(err, data) {
		if(err) {
			return console.log(err);
		}
		res.json(data);
	});
});


//    CURRENT_USER     //

app.get("/current/tracks", function(req, res){
	const user = req.query.userInfo;
	console.log("bd user:", req.query.userInfo);

	pool.query(
		`SELECT
		u.user_id, u.user_login,
		p.playlist_id, p.playlist_name,
		t.track_id,
		a.album_name,
		s.singer_name,
		g.genre_name
		FROM users u JOIN playlists p USING(user_id)
		JOIN tracks t USING(track_id)
		JOIN albums a USING(album_id)
		JOIN singers s USING(singer_id)
		JOIN genres g USING(genre_id)
		WHERE u.user_id = ${user}`, user,
		function(err, data) {
		if(err) {
			return console.log(err);
		}
		res.json(data);
	});
});

app.get("/current/playlists", function(req, res){
	const user = req.query.userInfo;

	pool.query(
		`SELECT DISTINCT playlists.playlist_name FROM playlists, users
		WHERE users.user_id = ${user}`, user,
		function(err, data) {
		if(err) {
			return console.log(err);
		}
		res.json(data);
	});
});

app.listen(port);

console.log(`App is listening on ${port}`);
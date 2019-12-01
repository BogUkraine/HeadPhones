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
  password: "123123",
  database: "music"
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//    GET_METHODS     //

app.get("/quotes", function(req, res){
	pool.query("SELECT * FROM quotes", function(err, data) {
		if(err) {
			return console.log(err);
		}
		res.json(data);
		//console.log(data);
	});
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

app.get("/checkUser", function(req, res){
	const user = {
		login: req.query.user_login,
		password: req.query.user_password
	}
	pool.query(
		`SELECT *
		FROM users
		WHERE (users.user_login = '${user.login}' AND
		users.user_password = '${user.password}')`, user,
		function(err, data) {
		if(err) {
			return console.log(err);
		}
		res.json(data);
	});
});

app.get("/playlists", function(req, res){
	const user_id = req.query.user_id;
	pool.query(
		`SELECT DISTINCT playlist_id, playlist_name
		FROM playlists
		WHERE user_id = ${user_id}`, user_id,
		function(err, data) {
		if(err) {
			return console.log(err);
		}
		res.json(data);
	});
});

app.get("/playlists/data", function(req, res){
	const user_id = req.query.user_id;
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
		WHERE u.user_id = '${user_id}'`,
		user_id,
		function(err, data) {
		if(err) {
			return console.log(err);
		}
		res.json(data);
	});
});

app.get("/quote", function(req, res){
	pool.query(
		`SELECT quote_text FROM quotes ORDER BY RAND() LIMIT 1`,
		function(err, data) {
		if(err) {
			return console.log(err);
		}
		res.json(data);
	});
});

app.get("/topTracks", function(req, res){
	pool.query(
		`SELECT
		t.track_id, t.track_name, t.track_link, t.track_time,
		a.album_name, a.album_img, a.album_year,
		s.singer_name,
		g.genre_name
		FROM tracks t
		JOIN albums a USING(album_id)
		JOIN singers s USING(singer_id)
		JOIN genres g USING(genre_id)
		ORDER BY RAND()
		LIMIT 7`,
		function(err, data) {
		if(err) {
			return console.log(err);
		}
		res.json(data);
	});
});

//    POST_METHODS     //

app.post("/addUser", function(req, res){
	const user = {
		login: req.body.user_login,
		password: req.body.user_password
	}
	pool.query(
		`INSERT INTO users (user_login, user_password)
		VALUES ('${user.login}', '${user.password}')`,
		user,
		function(err, data) {
		if(err) {
			return console.log(err);
		}
		res.json(data);
	});
});

app.post("/addPlaylist", function(req, res){
	const playlist = {
		playlist_id: req.body.playlist_id,
		user_id: req.body.user_id,
		track_id: req.body.track_id,
		playlist_name: req.body.playlist_name
	}

	pool.query("INSERT INTO playlists SET ?", playlist, function(err, data) {
		if(err) {
			return console.log(err);
		}
		res.send(playlist);
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
		`SELECT DISTINCT playlist_id, playlist_name
		FROM playlists
		WHERE user_id = ${user}`, user,
		function(err, data) {
		if(err) {
			return console.log(err);
		}
		res.json(data);
	});
});

app.get("/current/playlist_data", function(req, res){
	const playlist_id = req.query.playlist_id;

	pool.query(
		`SELECT
		p.playlist_id, p.playlist_name,
		t.track_id, t.track_name, t.track_time,
		a.album_name,
		s.singer_name,
		g.genre_name
		FROM users u JOIN playlists p USING(user_id)
		JOIN tracks t USING(track_id)
		JOIN albums a USING(album_id)
		JOIN singers s USING(singer_id)
		JOIN genres g USING(genre_id)
		WHERE playlist_id = ${playlist_id}`, playlist_id,
		function(err, data) {
		if(err) {
			return console.log(err);
		}
		res.json(data);
	});
});

app.get("/current/user", function(req, res){
	const user_id = req.query.user_id;

	pool.query(
		`SELECT
		u.user_id, u.user_login,
		u.user_password, u.user_name
		FROM users u
		WHERE user_id = ${user_id}`, user_id,
		function(err, data) {
		if(err) {
			return console.log(err);
		}
		res.json(data);
	});
});

app.listen(port);

console.log(`App is listening on ${port}`);
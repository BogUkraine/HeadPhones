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
    pool.query("SELECT * FROM Track", function(err, data) {
      if(err) {
          return console.log(err);
      }
      res.json(data);
      //console.log(data);
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

app.get("/albums", function(req, res){
	pool.query("SELECT * FROM album", function(err, data) {
		if(err) {
			return console.log(err);
		}
		res.json(data);
		//console.log(data);
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
		//console.log(data);
	});
});

app.get("/singers", function(req, res){
	pool.query("SELECT * FROM singer", function(err, data) {
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

//    CURRENT_USER     //

app.get("/users/current/playlists", function(req, res){
	pool.query(
		`SELECT
		t_user.user_id, t_playlist.playlist_id, t_playlist.track_id, t_playlist.playlist_name
		From t_user LEFT JOIN t_playlist
		ON t_user.user_id = t_playlist.playlist_id`,
		function(err, data) {
		if(err) {
			return console.log(err);
		}
		res.json(data);
	});
});

app.get("/users/current/tracks", function(req, res){
	pool.query(
		`SELECT
		tr.track_id, tr.track_link, tr.track_name, tr.track_time,
		al.album_name, al.album_year, al.album_img,
		sn.singer_name,
		gn.genre_name
		From ((Track tr JOIN genre gn USING(genre_id)) JOIN album al USING(album_id))
		JOIN singer sn USING(singer_id)`,
		function(err, data) {
		if(err) {
			return console.log(err);
		}
		res.json(data);
	});
});

app.listen(port);

console.log(`App is listening on ${port}`);
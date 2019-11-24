import React, { Component } from 'react';
import { connect } from 'react-redux';

import HomeLeft from './HomeLeft';
import HomeRight from './HomeRight';

import axios from 'axios';

class Home extends Component {

    componentDidMount() {

        axios.get("http://localhost:3210/singers")
        .then( (response) => {
            this.props.loadSingers(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });

        axios.get("http://localhost:3210/albums")
        .then( (response) => {
            this.props.loadAlbums(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });

        axios.get("http://localhost:3210/tracks/joined")
        .then( (response) => {
            this.props.loadTracks(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    }


    render() {
        return (
            <div className="home">
                <HomeLeft />
                <HomeRight />
            </div>
        );
    }
}

export default connect(
	state => ({
	  testUser: state.users
	}),
	dispatch => ({
		loadTracks: (data) => {
			dispatch({
				type: "LOAD_TRACKS",
				payload: data
			})
        },
        loadAlbums: (data) => {
			dispatch({
				type: "LOAD_ALBUMS",
				payload: data
			})
        },
        loadSingers: (data) => {
			dispatch({
				type: "LOAD_SINGERS",
				payload: data
			})
        },
        loadPlaylists: (data) => {
			dispatch({
				type: "LOAD_PLAYLISTS",
				payload: data
			})
		}
	})
  )(Home);
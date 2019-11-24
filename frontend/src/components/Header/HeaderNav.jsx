import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';

import NavPlaylists from './NavPlaylists';

class Nav extends Component {
    constructor(props){
        super(props);
        this.onClickCreate = this.onClickCreate.bind(this);
        this.onClickItem = this.onClickItem.bind(this);
    }

    onClickCreate() {
        var arr = [];
        for ( let i = 0; i < this.props.playlists.length; i++) {
            arr[i] = this.props.playlists[i].playlist_id;
        }

        let newId = Math.max.apply(null, arr)+1;

        axios.post("http://localhost:3210/playlists", {
            playlist_id: newId,
            user_id: this.props.currentUser.user_id,
            track_id: 1,
            playlist_name: "Playlist_name"
        })
        .then( (response) => {

            axios.get("http://localhost:3210/playlists")
            .then( (response) => {
                this.props.loadPlaylists(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });

            axios.get("http://localhost:3210/current/playlists", {
                params: {
                    userInfo: this.props.currentUser.user_id
                }
            })
            .then( (response) => {
                this.props.loadCurrentPlaylists(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });

            axios.get("http://localhost:3210/current/playlist_data", {
                params: {
                    playlist_id: newId
                }
            })
            .then( (response) => {
                this.props.loadCurrentPlaylist(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });

        })
        .catch(error => {
            console.log(error.response);
            });
    }

    onClickItem() {
        axios.get("http://localhost:3210/current/playlist_data", {
            params: {
                playlist_id: this.props.currentPlaylists[0].playlist_id
            }
        })
        .then( (response) => {
            this.props.loadCurrentPlaylist(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render() {
        return (
            <div className="header__navigation">
                <ul className="header__topmenu">
                    <NavLink to="/home">
                        <li className="header__topmenu_item">
                        <span className="header__topmenu_text">
                            Home
                        </span>
                        </li>
                    </NavLink>
                    <NavLink to="/library">
                        <li className="header__topmenu_item">
                        <span className="header__topmenu_text">
                            Library
                        </span>
                        </li>
                    </NavLink>
                    <NavLink to="/playlist">
                        <li className="header__topmenu_item" onClick={this.onClickItem}>
                            <span className="header__topmenu_text">Playlist</span>
                            <ul className="header__submenu">
                                <NavPlaylists />
                                <li
                                className="header__submenu_item"
                                onClick={this.onClickCreate}
                                >
                                    CreatePlaylist
                                </li>
                            </ul>
                        </li>
                    </NavLink>
                </ul>
            </div>
        );
    }
}

export default connect(
	state => ({
        currentUser: state.currentUser,
        playlists: state.playlists,
        currentPlaylists: state.currentPlaylists
	}),
	dispatch => ({
        loadCurrentPlaylist: (data) => {
			dispatch({
				type: "LOAD_CURRENT_PLAYLIST_DATA",
				payload: data
			})
        },
        loadCurrentPlaylists: (data) => {
			dispatch({
				type: "LOAD_CURRENT_PLAYLISTS",
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
  )(Nav);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class NavPlaylists extends Component {

    onClickItem(id) {
        axios.get("http://localhost:3210/current/playlist_data", {
            params: {
                playlist_id: id
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
        let i = 0
        return (
            this.props.currentPlaylists.map((value) => {
                return (
                    <li
                    className="header__submenu_item"
                    key={i++}
                    onClick={() => this.onClickItem(value.playlist_id)}
                    >
                        {value.playlist_name}
                    </li>
                );
            })
        );
    }
}

export default connect(
    state => ({
        currentPlaylists: state.currentPlaylists
    }),
    dispatch => ({
        loadCurrentPlaylist: (data) => {
			dispatch({
				type: "LOAD_CURRENT_PLAYLIST_DATA",
				payload: data
			})
		}
	})
  )(NavPlaylists);
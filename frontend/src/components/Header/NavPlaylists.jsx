import React, { Component } from 'react';
import { connect } from 'react-redux';

class NavPlaylists extends Component {
    render() {
        let i = 0
        return (
            this.props.currentPlaylists.map((value) => {
                return (
                    <li
                    className="header__submenu_item"
                    key={i++}
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
        currentPlaylists: state.playlists
    }),
    dispatch => ({})
  )(NavPlaylists);
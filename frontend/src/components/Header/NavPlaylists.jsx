import React, { Component } from 'react';
import { connect } from 'react-redux';

import fetchPickedPlaylist from '../../actions/fetchPickedPlaylist';

class NavPlaylists extends Component {

    onClickItem(id) {
        this.props.pickedPlaylist(id);
    }

    render() {
        return (
            this.props.playlists.map((value) => {
                return (
                    <li
                    className="header__submenu_item"
                    key={value.playlist_id}
                    onClick={() => this.onClickItem(value.playlist_id)}>
                        {value.playlist_name}
                    </li>
                );
            })
        );
    }
}

export default connect(
    state => ({
        playlists: state.playlists,
    }),
    {
        pickedPlaylist: fetchPickedPlaylist,
    }
  )(NavPlaylists);
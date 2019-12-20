import React, { Component } from 'react';
import { connect } from 'react-redux';

import fetchPickedPlaylist from '../../actions/fetchPickedPlaylist';

class NavPlaylists extends Component {
    constructor(props){
        super(props)

        this.onClickItem = this.onClickItem.bind(this);
    }

    onClickItem(playlist_id) {
        this.props.pickedPlaylist(playlist_id);
    }

    render() {
        let i = 0;
        return (
            this.props.playlists.map((value) => {
                return (
                    <li
                    className="header__submenu_item"
                    key={i++}
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
        user: state.user,
    }),
    {
        pickedPlaylist: fetchPickedPlaylist,
    }
  )(NavPlaylists);
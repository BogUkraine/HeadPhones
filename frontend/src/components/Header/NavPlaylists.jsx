import React from 'react';
import { connect } from 'react-redux';

const NavPlaylists = () => {
	return (
        <ul className="header__submenu">

            <li className="header__submenu_item">userPlaylist.map</li>
            <li className="header__submenu_item">CreatePlaylist</li>
        </ul>
	);
}

export default connect(
    state => ({
        currentPlaylists: state.currentUser.user_name
    }),
    dispatch => ({})
  )(NavPlaylists);
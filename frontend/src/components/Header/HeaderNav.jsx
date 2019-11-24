import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';

import NavPlaylists from './NavPlaylists';

class Nav extends Component {

    onClickCreate() {

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
                        <li className="header__topmenu_item">
                            <span className="header__topmenu_text">Playlist</span>
                            <ul className="header__submenu">
                                <NavPlaylists />
                                <li className="header__submenu_item">CreatePlaylist</li>
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
      playlistData: state.currentPlaylist,
      userData: state.currentUser
	}),
	dispatch => ({
        loadCurrentPlaylist: (data) => {
			dispatch({
				type: "LOAD_CURRENT_PLAYLIST_DATA",
				payload: data
			})
		}
	})
  )(Nav);

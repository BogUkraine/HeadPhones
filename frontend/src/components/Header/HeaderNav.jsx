import React from 'react';
import { NavLink } from 'react-router-dom';

import NavPlaylists from './NavPlaylists';

const Nav = () => {
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

export default Nav;

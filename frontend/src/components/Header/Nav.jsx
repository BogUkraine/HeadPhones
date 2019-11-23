import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
	return (
        <div className="header__navigation">
            <NavLink to="/home"><div className="header__link">Home</div></NavLink>
            <NavLink to="/library"><div className="header__link">Library</div></NavLink>
            <NavLink to="/playlist">
                <div className="header__link">Playlist</div>
            </NavLink>
        </div>
	);
}

export default Nav;

import React from 'react';

import Search from './Search';
import Nav from './Nav';
import Username from './Username';

import logo from '../../images/icon.png';

const Header = () => {
	return (
        <header className="header">
            <div className="header__logo">
                <img className="header__image" src={logo} alt="logo" />
                <span className="header__title">HeadPhones</span>
            </div>
            <Nav />
            <Search />
            <Username />
        </header>
	);
}

export default Header;

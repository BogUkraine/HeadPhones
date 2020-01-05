import React from 'react';

import HeaderSearch from './HeaderSearch';
import Nav from './HeaderNav';
import Username from './HeaderUser';

import logo from '../../images/icon.png';

const Header = () => {
	return (
        <header className="header">
            <div className="header__logo">
                <img className="header__image" src={logo} alt="logo" />
                <span className="header__title">HeadPhones</span>
            </div>
            <Nav />
            <HeaderSearch />
            <Username />
        </header>
	);
}

export default Header;

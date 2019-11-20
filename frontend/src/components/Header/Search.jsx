import React from 'react';

import img from '../../images/search.png';

const Search = () => {
	return (
        <label className="header__search">
            <input className="header__field" type="text" />
            <img className="header__search_image" src={img} alt="search" />
        </label>
	);
}

export default Search;

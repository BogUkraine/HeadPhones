import React from 'react';

import image from '../../../images/headphones1.png';

const HomeRight = () => {
    return (
        <div className="home__right">
            <img className="home__right_img" src={image} alt="kek" />
            <span className="home__right_quote">
                “Without music, life would be a mistake” ― Friedrich Nietzsche
            </span>
        </div>
    );
}

export default HomeRight;
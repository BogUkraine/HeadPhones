import React from 'react';

import HomeList from './HomeList';

const HomeLeft = () => {
    return (
        <div className="home__left">
            <h2 className="home__left_title">
                Today's Top-7
            </h2>
            <HomeList />
        </div>
    );
}

export default HomeLeft;
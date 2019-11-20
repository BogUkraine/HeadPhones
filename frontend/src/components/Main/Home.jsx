import React from 'react';

import HomeWrapper from './HomeTrack';

const Home = () => {
	return (
        <main>
            <div className="home-wrapper-main-left">
                <HomeWrapper />
            </div>
            <div className="home-main-right">
                <img src="headphones1.png" alt="kek" />
                <span>
                    “Without music, life would be a mistake” ― Friedrich Nietzsche
                </span>
            </div>
        </main>
	);
}

export default Home;
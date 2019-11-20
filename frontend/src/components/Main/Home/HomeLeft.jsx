import React from 'react';

const HomeLeft = () => {
    return (
        <div className="home__left">
            <div className="home__track">
                <div className="home__track_img"></div>
                <div className="home__track_description">
                    <span className="home__track_name">track_name</span>
                    <div className="home__track_wrapper">
                        <span className="home__track_singer">singer &ensp; &#9679; &ensp;</span>
                        <span className="home__track_album">album &ensp; &#9679; &ensp;</span>
                        <span className="home__track_year">2019</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeLeft;
import React from 'react';

const HomeTrack = ( ({track_name, key}) => {
    return (
        <div className="home__track">
            <div className="home__track_img"></div>
            <div className="home__track_description">
                <span className="home__track_name">{track_name}</span>
                <div className="home__track_wrapper">
                    <span className="home__track_singer">singer_name</span>
                    <span className="home__track_album">album_name</span>
                    <span className="home__track_year">2019</span>
                </div>
            </div>
        </div>
    );
})

export default HomeTrack;
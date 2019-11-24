import React from 'react';
import time from '../../../functions/time.js';

const HomeTrack = ( ({track_name, singer_name, album_name, album_year, album_img, track_time}) => {
    return (
        <div className="home__track">
            <img className="home__track_img" src={album_img} alt="album" />
            <div className="home__track_wrapper">
                <span className="home__track_name">{track_name}</span>
                <div className="home__track_description">
                    <span className="home__track_singer">{singer_name}</span>
                    <span className="home__track_album">{album_name}</span>
                    <span className="home__track_year">{album_year}</span>
                    <span className="home__track_time">{time(track_time)}</span>
                </div>
            </div>
        </div>
    );
})

export default HomeTrack;
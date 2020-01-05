import React from 'react';
import time from '../../../functions/time.js';

const SearchTrack = ( ({track_name, singer_name, album_name, album_year, album_img, track_time}) => {
    return (
        <div className="common__track">
            <img className="common__track_img" src={album_img} alt="track_img"/>
            <div className="common__track_wrapper">
                <span className="common__track_name">{track_name}</span>
                <div className="common__track_description">
                    <span className="common__track_singer">{singer_name}</span>
                    <span className="common__track_album">{album_name}</span>
                    <span className="common__track_year">{album_year}</span>
                    <span className="common__track_time">{time(track_time)}</span>
                </div>
            </div>
        </div>
    );
})

export default SearchTrack;
import React from 'react';
import time from '../../../functions/time.js';

const LibraryTrack = ( ({track_name, singer_name, album_name, album_year, album_img, track_time}) => {
    return (
        <div className="library__track">
            <img className="library__track_img" src={album_img}/>
            <div className="library__track_wrapper">
                <span className="library__track_name">{track_name}</span>
                <div className="library__track_description">
                    <span className="library__track_singer">{singer_name}</span>
                    <span className="library__track_album">{album_name}</span>
                    <span className="library__track_year">{album_year}</span>
                    <span className="library__track_time">{time(track_time)}</span>
                </div>
            </div>
        </div>
    );
})

export default LibraryTrack;
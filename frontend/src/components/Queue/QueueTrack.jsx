import React from 'react';
import time from '../../functions/time.js';

const QueueTrack = (({track, album_img, track_name, singer_name, album_name, album_year, track_time, change_track, index}) => {
    return (
        <div className="common__track" onClick={() => change_track(track, index)}>
            <img className="common__track_img" src={album_img} alt="album" />
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
    )
});
        

export default QueueTrack;
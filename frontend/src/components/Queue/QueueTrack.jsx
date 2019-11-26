import React from 'react';
import time from '../../../functions/time.js';

const QueueTrack = (({track, album_img, track_name, singer_name, album_name, album_year, track_time, change_track}) => {
        return (
            <div className="common__track">
                <img className="common__track_img" src="" alt="album" />
                <div className="common__track_wrapper">
                    <span className="common__track_name"></span>
                    <div className="common__track_description">
                        <span className="common__track_singer"></span>
                        <span className="common__track_album"></span>
                        <span className="common__track_year"></span>
                        <span className="common__track_time"></span>
                    </div>
                </div>
            </div>
        );
})

export default QueueTrack;
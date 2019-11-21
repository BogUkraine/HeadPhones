import React from 'react';

const PlaylistTracks = () => {
    return (
        <div className="playlist__track">
            <div className="playlist__track_title">
                <div className="playlist__track_img"></div>
                <span className="playlist__track_name">track_name</span>
            </div>
            <div className="playlist__track_description">
                <span className="playlist__track_singer">singer</span>
                <span className="playlist__track_album">album</span>
                <span className="playlist__track_year">2019</span>
            </div>
            <div className="playlist__track_time">
                <span className="current_time">1:01</span>
                <span className="whole_time">3:30</span>
            </div>
        </div>
    );
}

export default PlaylistTracks;
import React from 'react';

const PlaylistTracks = (({track_name, singer_name, album_name, album_year, album_img, track_time}) => {
    return (
        <div className="playlist__track">
            <div className="playlist__track_title">
                <div className="playlist__track_img" src={album_img}></div>
                <span className="playlist__track_name">{track_name}</span>
            </div>
            <div className="playlist__track_description">
                <span className="playlist__track_singer">{singer_name}</span>
                <span className="playlist__track_album">{album_name}</span>
                <span className="playlist__track_year">{album_year}</span>
            </div>
            <div className="playlist__track_time">
                <span className="current_time">1:01</span>
                <span className="whole_time">3:30</span>
            </div>
        </div>
    );
})

export default PlaylistTracks;
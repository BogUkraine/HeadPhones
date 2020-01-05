import React from 'react';
import time from '../../../functions/time.js';

const HomeTrack = (({track, album_img, track_name, singer_name, album_name,
     album_year, track_time, change_track, index, toAlbum, toQueue, playlists}) => {
    return (
        <div className="common__track" onClick={() => change_track(track, index)}>
            <img className="common__track_img" src={album_img} alt="album" />
            <div className="common__track_wrapper">
                <span className="common__track_name">{track_name}</span>
                <div className="common__track_add">
                    <span className="common__track_add_to_queue"
                     onClick={(event) => toQueue(event, track)}>+ queue</span>
                    {playlists.length !== 0 
                    ? <span className="common__track_add_to_album"
                    onClick={(event) => toAlbum(event, track)}>+ album</span>
                    : null} 
                </div>
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

export default HomeTrack;
import React from 'react';

const LibraryTrack = ( ({track_name, singer_name, album_name, album_year, album_img, track_time}) => {
    let minutes, seconds;

    const time = (db_time) => {
        minutes = Math.floor(db_time/60);
        seconds = db_time%60;
        if(seconds < 10) seconds = "0" + seconds.toString();
        return(`${minutes}:${seconds}`)
    }

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
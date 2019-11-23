import React from 'react';

const HomeTrack = ( ({track_name, singer_name, album_name, album_year, album_img, track_time}) => {
    let minutes, seconds;

    const time = (db_time) => {
        minutes = Math.floor(db_time/60);
        seconds = db_time%60;
        if(seconds < 10) seconds = "0" + seconds.toString();
        return(`${minutes}:${seconds}`)
    }

    return (
        <div className="home__track">
            <img className="home__track_img" src={album_img} alt="album" />
            <div className="home__track_wrapper">
                <span className="home__track_name">{track_name}</span>
                <div className="home__track_description">
                    <span className="home__track_singer">{singer_name}</span>
                    <span className="home__track_album">{album_name}</span>
                    <span className="home__track_year">{album_year}</span>
                    <span className="library__track_time">{time(track_time)}</span>
                </div>
            </div>
        </div>
    );
})

export default HomeTrack;
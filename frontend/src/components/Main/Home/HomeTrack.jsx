import React from 'react';

const HomeTrack = ( ({track_name, singer_name, album_name, album_year, album_img}) => {
    console.log();
    return (
        <div className="home__track">
            <img className="home__track_img" src="%PUBLIC%/data_bases/albums_images/GSPD_Rape_after_rave.jpg" alt="album" />
            <div className="home__track_description">
                <span className="home__track_name">{track_name}</span>
                <div className="home__track_wrapper">
                    <span className="home__track_singer">{singer_name}</span>
                    <span className="home__track_album">{album_name}</span>
                    <span className="home__track_year">{album_year}</span>
                </div>
            </div>
        </div>
    );
})

export default HomeTrack;
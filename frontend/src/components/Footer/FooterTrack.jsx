import React from 'react';

const FooterTrack = (({album_img, track_name, singer_name, album_name, album_year}) => {
    return(
        <div className="footer__track">
            <img className="common__track_img" src={album_img} alt="album" />
            <div className="common__track_wrapper">
                <span className="common__track_name">{track_name}</span>
                <div className="common__track_description">
                    <span className="common__track_singer">{singer_name}</span>
                    <span className="common__track_album">{album_name}</span>
                    <span className="common__track_year">{album_year}</span>
                </div>
            </div>
        </div>
    );
})

export default FooterTrack;
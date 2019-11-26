import React from 'react';

const FooterTrack = () => {
    return(
        <div className="footer__track">
            <img className="common__track_img" src="" alt="album" />
            <div className="common__track_wrapper">
                <span className="common__track_name"></span>
                <div className="common__track_description">
                    <span className="common__track_singer"></span>
                    <span className="common__track_album"></span>
                    <span className="common__track_year"></span>
                </div>
            </div>
        </div>
    );
}

export default FooterTrack;
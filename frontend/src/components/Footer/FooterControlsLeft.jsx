import React from 'react';

const FooterControlsLeft = () => {
    return(
        <div className="footer__controls_left">
            <span className="fa fa-arrow-left footer__previous" aria-hidden="true"></span>
            <span className="fa fa-play-circle-o fa-2x footer__play" aria-hidden="true"></span>
            <span className="fa fa-pause-circle-o fa-2x footer__pause" aria-hidden="true"></span>
            <span className="fa fa-arrow-right footer__next" aria-hidden="true"></span>
            <span className="footer__time" aria-hidden="true">time</span>
        </div>
    );
}

export default FooterControlsLeft;
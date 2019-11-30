import React from 'react';

const FooterControlsLeft = (props) => {
    return(
        <div className="footer__controls_left">
            <span onClick={props.goPreviousSong} className="fa fa-arrow-left footer__previous" aria-hidden="true"></span>
            
            {props.playlistIsPlaying
            ? (<span onClick={() => props.updateIsPlaying()} className='fa fa-pause fa-2x footer__pause'></span>)
            : (<span onClick={() => props.updateIsPlaying()} className='fa fa-play fa-2x footer__play'></span>)}

            <span onClick={props.goNextSong} className="fa fa-arrow-right footer__next" aria-hidden="true"></span>
            <span className="footer__time" aria-hidden="true">
                {props.audioControls.songTime}/{props.audioControls.songDuration}
            </span>
        </div>
    );
}

export default FooterControlsLeft;
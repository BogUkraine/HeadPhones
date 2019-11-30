import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const FooterControlsRight = (props) => {
    return(
        <div className="footer__controls_right">
            <div className="footer__volume">
                <div className="footer__volume_seekbar">
                    <Slider min={0} max={100}
                    defaultValue={props.volumeLevel}
                    onChange={props.updateVolumeLevel}
                    />
                </div>
                <button className="control_button footer__volume_button">
                    <span className="fa fa-volume-up" aria-hidden="true"></span>
                </button>
            </div>
            <button onClick="" className="control_button footer__repeat">
                <span className="fa fa-refresh" aria-hidden="true"></span>
            </button>
            <button onClick="" className="control_button footer__shuffle">
                <span className="fa fa-random" aria-hidden="true"></span>
            </button>
            <button onClick="" className="control_button footer__queue">
                <span className="fa fa-caret-up" aria-hidden="true"></span>
            </button>
        </div>
    );
}

export default FooterControlsRight;
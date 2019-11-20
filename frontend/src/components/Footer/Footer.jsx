import React from 'react';

const Footer = () => {
	return (
        <footer>
            <audio></audio>
            <div className="control_buttons">
                <div><img src="images/control_button1.png" /></div>
                <div><img src="images/control_button2.png" /></div>
                <div><img src="images/control_button3.png" /></div>
                <div><span>1:01</span>/<span>3:49</span></div>
            </div>
            <div>
                <div className="footer-music-block">
                    <div className="footer-music-block__img"></div>
                    <div className="footer-music-block__description">
                        <span className="footer-music-block__track-name">track_name</span>
                        <div className="footer-music-block__wrapper">
                            <span className="footer-music-block__singer">singer &ensp; &#9679; &ensp;</span>
                            <span className="footer-music-block__album">album &ensp; &#9679; &ensp;</span>
                            <span className="footer-music-block__year">2019</span>
                        </div>
                    </div>
                    <div>
                        <button></button>
                    </div>
                </div>
            </div>
            <div className="player-buttons">
                <div><img src="images/player_button.png" /></div>
                <div><img src="images/player_button.png" /></div>
                <div><img src="images/player_button.png" /></div>
            </div>
        </footer>
	);
}

export default Footer;
import React from 'react';

import FooterMore from './FooterMore';

const FooterControlsRight = () => {
    return(
        <div className="footer__controls_right">
            <FooterMore />
            <span className="fa fa-volume-up footer__volume" aria-hidden="true"></span>
            <span className="fa fa-refresh footer__repeat" aria-hidden="true"></span>
            <span className="fa fa-random footer__shuffle" aria-hidden="true"></span>
            <span className="fa fa-caret-up footer__queue" aria-hidden="true"></span>
        </div>
    );
}

export default FooterControlsRight;
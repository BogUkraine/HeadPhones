import React from 'react';

const FooterMore = () => {
    return(
        <div className="fa fa-navicon footer__more">
            <ul className="footer__more_submenu">
                <li className="footer__more_item">Add to playlist</li>
                <li className="footer__more_item">Add to queue</li>
                <li className="footer__more_item">Go to album</li>
            </ul>
        </div>
    );
}

export default FooterMore;
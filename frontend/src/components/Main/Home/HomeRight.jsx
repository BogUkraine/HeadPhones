import React from 'react';
import { connect } from 'react-redux';

import image from '../../../images/headphones1.png';

const HomeRight = (props) => {
    return (
        <div className="home__right">
            <img className="home__right_img" src={image} alt="kek" />
            <span className="home__right_quote">
                {props.quote[0].quote_text}
            </span>
        </div>
    );
}

export default connect(
	state => ({
        quote: state.quote
    }),
    {}
  )(HomeRight);
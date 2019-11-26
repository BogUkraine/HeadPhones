import React, { Component } from 'react';
import {connect} from 'react-redux';

import FooterTrack from './FooterTrack';
import FooterControlsLeft from './FooterControlsLeft';
import FooterControlsRight from './FooterControlsRight';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <FooterControlsLeft />
                <FooterTrack />
                <FooterControlsRight />

                <audio
                className="footer__audio"
                src={this.props.currentTrack.track_link}
                controls>
                </audio>
            </footer>
        );
    }
}

export default connect(
	state => ({
        currentTrack: state.currentTrack
	}),
	dispatch => ({})
  )(Footer);
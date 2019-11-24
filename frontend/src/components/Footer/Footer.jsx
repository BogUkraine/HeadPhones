import React, { Component } from 'react';
import {connect} from 'react-redux';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
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
import React, {Component} from 'react';
import {connect} from 'react-redux';

import PlaylistButtons from './PlaylistButtons';
import tracksTime from '../../../functions/tracksTime.js';
import countOfTracks from '../../../functions/countOfTracks.js'

class PlaylistDescription extends Component {

    render() {
        let p_name = this.props.playlistData[0].playlist_name;
        return (
            <div className="playlist__header_wrapper">
                <div className="playlist__header_description">
                    <h2 className="header__playlist_name">{p_name}</h2>
                    <span className="header__user_name">{this.props.userData.user_name}</span>
                    <span
                    className="header__tracks_count"
                    >
                        Tracks count: {countOfTracks(this.props.playlistData)}
                    </span>
                    <span
                    className="header__tracks_time"
                    >
                        Tracks time: {tracksTime(this.props.playlistData)}
                    </span>
                </div>
                <PlaylistButtons />
            </div>
        );
    }
}

export default connect(
	state => ({
      playlistData: state.currentPlaylist,
      userData: state.currentUser,
      playlistName: state.currentPlaylist.playlist_name
	}),
	dispatch => ({
	})
  )(PlaylistDescription);
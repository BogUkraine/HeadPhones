import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

import PlaylistButtons from './PlaylistButtons';

class PlaylistDescription extends Component {

    timeDelimiter = (db_time) => {
        //let hours = Math.floor(db_time/3600);
        let minutes = Math.floor(db_time/60);
        let seconds = db_time%60;
        if(seconds < 10) seconds = "0" + seconds.toString();
        return(`${minutes}:${seconds}`)
    }

    countOfTracks = (data) => {
        return data.length;
    }

    tracksTime = (data) => {
        let time = 0;
        for( let i = 0; i < data.length; i++ ) {
            time += data[i].track_time;
        }
        return this.timeDelimiter(time);
    }

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
                        Tracks count: {this.countOfTracks(this.props.playlistData)}
                    </span>
                    <span
                    className="header__tracks_time"
                    >
                        Tracks time: {this.tracksTime(this.props.playlistData)}
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
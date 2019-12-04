import React, {Component} from 'react';
import {connect} from 'react-redux';

import PlaylistButtons from './PlaylistButtons';
import PlaylistEditer from './PlaylistEditer';
import tracksTime from '../../../functions/tracksTime.js';
import countOfTracks from '../../../functions/countOfTracks.js'

class PlaylistDescription extends Component {

    render() {
        var index = 0;
        if(this.props.pickedPlaylist.length !== 0){
            for(let i = 0; i < this.props.playlists.length; i++){
                if(this.props.playlists[i].playlist_id === this.props.pickedPlaylist[0].playlist_id){
                    index = i;
                    break;
                }
            }
        }
        
        return (
            <div className="playlist__header_wrapper">
                <div className="playlist__header_description">
                    <h2 className="header__playlist_name">
                        {(this.props.pickedPlaylist.length !== 0)
                        ? this.props.playlists[index].playlist_name
                        : "Playlist name"}
                    </h2>
                    <span className="header__user_name">{this.props.user.user_login}</span>
                    <span
                    className="header__tracks_count"
                    >
                        Tracks count: {countOfTracks(this.props.pickedPlaylist)}
                    </span>
                    <span
                    className="header__tracks_time"
                    >
                        Tracks time: {tracksTime(this.props.pickedPlaylist)}
                    </span>
                </div>
                <PlaylistButtons />
                <PlaylistEditer />
            </div>
        );
    }
}

export default connect(
	state => ({
      pickedPlaylist: state.pickedPlaylist,
      playlists: state.playlists,
      user: state.user,
	}),
	dispatch => ({
	})
  )(PlaylistDescription);
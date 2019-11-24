import React, {Component} from 'react';
import { connect } from 'react-redux';

import HomeTrack from './HomeTrack';

class HomeList extends Component {
    changeTrack(track) {
        this.props.changeCurrentTrack(track)
    }

    render() {
        return (
            this.props.tracks.map(( value ) => {
                return (
                    <HomeTrack
                        track={value}
                        track_id={value.track_id}
                        track_name={value.track_name}
                        album_name={value.album_name}
                        singer_name={value.singer_name}
                        album_year={value.album_year}
                        album_img={value.album_img}
                        track_time={value.track_time}
                        change_track={this.changeTrack.bind(this)}
                        key={value.track_id}
                    />
                );
            })
        );
    }
}

export default connect(
    state => ({
        tracks: state.tracks,
        currentTrack: state.currentTrack
    }),
    dispatch => ({
        changeCurrentTrack: (data) => {
			dispatch({
				type: "CHANGE_CURRENT_TRACK",
				payload: data
			})
		}
    })
)(HomeList);
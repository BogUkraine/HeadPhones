import React, {Component} from 'react';
import { connect } from 'react-redux';

import HomeTrack from './HomeTrack';

class HomeList extends Component {
    render() {
        return (
            this.props.tracks.map(( value ) => {
                return (
                    <HomeTrack
                        track_name={value.track_name}
                        album_name={value.album_name}
                        singer_name={value.singer_name}
                        album_year={value.album_year}
                        album_img={value.album_img}
                        track_time={value.track_time}
                        key={value.track_id}
                    />
                );
            })
        );
    }
}

export default connect(
    state => ({
        tracks: state.tracks
    }),
    dispatch => ({})
)(HomeList);
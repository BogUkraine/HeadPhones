import React, {Component} from 'react';
import PlaylistTrack from './PlaylistTrack';
import {connect} from 'react-redux';

class PlaylistList extends Component {
        render() {
            return(
                this.props.currentPlaylist.map(( value ) => {
                    return (
                        <PlaylistTrack
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
            )
        }
}

export default connect(
    state => ({
        currentPlaylist: state.currentPlaylist
    }),
    dispatch => ({})
)(PlaylistList);
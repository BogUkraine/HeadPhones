import React, {Component} from 'react';
import { connect } from 'react-redux';

import HomeTrack from './HomeTrack';

class HomeList extends Component {
    changeTrack(track, index) {
        if(this.props.checkQueue){
            this.props.queue(this.props.tracks);
            this.props.changeCheckerTracks(false);
        }
        const footer = document.getElementById("footer");
        const main = document.getElementById("main");
        footer.style.display = "flex";
        main.style.height = "calc(100vh - 122px)";
        this.props.changeCurrentTrack(track, index);
    }

    render() {
        return (
            this.props.tracks.map(( value, index ) => {
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
                        index={index}
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
        currentTrack: state.currentTrack,
        queueData: state.queue,
        checkQueue: state.checkerQueue,
    }),
    {
        changeCurrentTrack: (track, index) => ({
            type: "CHANGE_CURRENT_TRACK",
            payload: {
                track_id: track.track_id,
                track_name: track.track_name,
                track_link: track.track_link,
                album_name: track.album_name,
                singer_name: track.singer_name,
                album_year: track.album_year,
                album_img: track.album_img,
                track_time: track.track_time,
                index: index,
            }
        }),
        queue: (data) => ({
            type: "COPY_TRACKS",
            payload: data
        }),
        changeCheckerTracks: (data) => ({
            type: "CHANGE_CHECKER",
            payload: data
        }),
    }
)(HomeList);
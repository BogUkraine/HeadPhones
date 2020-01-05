import React, {Component} from 'react';
import PlaylistTrack from './PlaylistTrack';
import {connect} from 'react-redux';

import fetchPlaylists from '../../../actions/fetchPlaylists';

class PlaylistList extends Component {  
    constructor(props) {
        super(props)
        this.deepEqual = this.deepEqual.bind(this);
    }
    
    deepEqual = (arrTracks, arrQueue) => {
        for (let i = 0; i < arrTracks.length; i++){
            if (JSON.stringify(arrTracks[i]) !== JSON.stringify(arrQueue[i])){
                this.props.changeCheckerTracks(true);
                break;
            }
        }
    }

    changeTrack(track, index) {
        this.deepEqual(this.props.pickedPlaylist, this.props.queue);

        setTimeout(()=> {
            if(this.props.checkQueue){
                this.props.queue(this.props.pickedPlaylist);
                this.props.changeCheckerTracks(false);
            }
            const footer = document.getElementById("footer");
            const main = document.getElementById("main");
            footer.style.display = "flex";
            main.style.height = "calc(100vh - 122px)";

            this.props.changeIsPlaying(true);
            this.props.changeCurrentTrack(track, index);       
        }, 100)
    }
    
    render() {
        let i = 0;
        return(
            <div className="playlist__list">
                {this.props.pickedPlaylist.map(( value, index ) => {
                    return (
                        <PlaylistTrack
                            track={value}
                            track_name={value.track_name}
                            album_name={value.album_name}
                            singer_name={value.singer_name}
                            album_year={value.album_year}
                            album_img={value.album_img}
                            track_time={value.track_time}
                            change_track={this.changeTrack.bind(this)}
                            index={index}
                            key={i++}
                        />
                    );
                })}
            </div>
        )
    }
}

export default connect(
    state => ({
        pickedPlaylist: state.pickedPlaylist,
        user: state.user,
        queue: state.queue,
        checkQueue: state.checkerQueue
    }),
    {
        fetchPlaylists: fetchPlaylists,
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
        changeCheckerTracks: (data) => ({
            type: "CHANGE_CHECKER",
            payload: data
        }),
        queue: (data) => ({
            type: "COPY_TRACKS",
            payload: data
        }),
        changeIsPlaying: (data) => ({
            type: "CHANGE_IS_PLAYING",
            payload: data,
        })
    }
)(PlaylistList);
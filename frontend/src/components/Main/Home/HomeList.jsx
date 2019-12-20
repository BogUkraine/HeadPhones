import React, {Component} from 'react';
import { connect } from 'react-redux';

import HomeTrack from './HomeTrack';
class HomeList extends Component {
    constructor(props){
        super(props);
        this.state = {
            choosedTrackId: 0,
        }
    }
    
    onClickClose(elem) {
        function outsideClickListener(event) {
            if (!elem.contains(event.target)) {
                elem.style.display = 'none'; 
                document.removeEventListener('click', outsideClickListener);
            }
        }
        document.addEventListener('click', outsideClickListener);
    }

    changeTrack(track, index) {        
        if(this.props.checkQueue){
            this.props.queue(this.props.tracks.slice());
            this.props.changeCheckerTracks(false);
        }
        const footer = document.getElementById("footer");
        const main = document.getElementById("main");
        footer.style.display = "flex";
        main.style.height = "calc(100vh - 122px)";
        this.props.changeIsPlaying(true);
        this.props.changeCurrentTrack(track, index);        
    }

    toAlbum(event, track) {
        event.stopPropagation();
        this.setState({choosedTrackId: track.track_id});
        const addToAlbum = document.getElementById('addToAlbum');
        addToAlbum.style.top = event.target.getBoundingClientRect().y + 'px';
        addToAlbum.style.left = event.target.getBoundingClientRect().x + 'px';
        addToAlbum.style.display = 'flex';

        this.onClickClose(addToAlbum);
    }

    toQueue(event, track) {
        event.stopPropagation();
        const newQueue = this.props.queueData.slice();        
        newQueue.splice(this.props.currentTrack.index+1, 0, track);
        this.props.queue(newQueue);
    }

    clickToAdd(playlist_id) {
        this.props.addTrackToPlaylist(playlist_id, this.state.choosedTrackId);
        const addToAlbum = document.getElementById('addToAlbum');
        addToAlbum.style.display = 'none';
    }

    render() {
        return (
            <>
            {this.props.tracks.map(( value, index ) => {
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
                        toAlbum={this.toAlbum.bind(this)}
                        toQueue={this.toQueue.bind(this)}
                        index={index}
                        playlists={this.props.playlists}
                        key={value.track_id}
                    />
                );
            })}

            {this.props.playlists.length !== 0 ?
                <ul className="home__add_to_playlist" id="addToAlbum">
                    {this.props.playlists.map((value) => {
                        return(
                            <li className="add__item" onClick={() => this.clickToAdd(value.playlist_id)}
                            key={value.playlist_id*Math.random()*100}>
                                {value.playlist_name}
                            </li>
                        )
                    })}
                </ul>
            : null
            }
            </>
        )
    }
}

export default connect(
    state => ({
        tracks: state.tracks,
        currentTrack: state.currentTrack,
        queueData: state.queue,
        checkQueue: state.checkerQueue,
        playlists: state.playlists,
        user: state.user,
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
        addTrackToPlaylist: (p_id, t_id) => ({
            type: "ADD_TRACK_TO_PLAYLIST",
            p_id,
            t_id,
        }),
        changeIsPlaying: (data) => ({
            type: "CHANGE_IS_PLAYING",
            payload: data,
        })
    }
)(HomeList);
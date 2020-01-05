import React, {Component} from 'react';
import {connect} from 'react-redux';

class PlaylistButtons extends Component {
    onEditClick() {
        const editer = document.getElementById('editer');
        editer.style.display = 'flex';
    }

    onShuffleClick() {
        let array = this.props.pickedPlaylist.slice();
        this.props.addToQueue(array.sort(() => Math.random() - 0.5));

        const footer = document.getElementById("footer");
        const main = document.getElementById("main");
        footer.style.display = "flex";
        main.style.height = "calc(100vh - 122px)";
        
        setTimeout(() => {
            this.props.changeCurrentTrack(this.props.queue[0], 0);
        }, 1000)
    }

    render() {
        return (
            <div className="playlist__header_buttons">
                <button className="header__buttons_shuffle button" value="Shuffle" onClick={this.onShuffleClick.bind(this)}>Shuffle</button>
                <button className="header__buttons_edit button" value="Edit" onClick={this.onEditClick.bind(this)}>Edit Platlist</button>
            </div>
        );
    }
}

export default connect(
	state => ({
        pickedPlaylist: state.pickedPlaylist,
        playlists: state.playlists,
        queue: state.queue,
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
        addToQueue: (data) => ({
            type: "COPY_TRACKS",
            payload: data
        }),
    }
  )(PlaylistButtons);
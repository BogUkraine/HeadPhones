import React, {Component} from 'react';
import {connect} from 'react-redux';

import changePlaylistName from '../../../actions/changePlaylistName';
import image from '../../../images/close.png';

class PlaylistEditer extends Component {

    onClose() {
        const editer = document.getElementById('editer');
        const editerField = document.getElementById('editer_field');
        editer.style.display = 'none';
        editerField.value = editerField.defaultValue;
    }

    onSubmit() {
        const editer = document.getElementById('editer');
        const editerField = document.getElementById('editer_field');
        if(this.props.pickedPlaylist.length !== 0) {
            this.props.changePlaylistName(this.props.pickedPlaylist[0].playlist_id, editerField.value);
        }
        else {
            alert("Add at least one track to change playlist name");
        }
        editer.style.display = 'none';
    }

    render() {
        return (
            <div className="playlist__editer" id="editer">
                <img className="playlist__editer_close" alt="close" src={image} onClick={this.onClose.bind(this)}/> 
                <h2 className="playlist__editer_title">Change playlist name</h2>
                <label className="playlist__editer_wrapper">
                    {this.props.pickedPlaylist.length !== 0 ? 
                    <input type="text"
                    id="editer_field"
                    className="playlist__editer_field field"
                    placeholder={this.props.playlists[this.props.index].playlist_name}
                    pattern="^[A-Za-z0-9_-]{3,20}$"/>
                    :
                    <input type="text"
                    id="editer_field"
                    className="playlist__editer_field field"
                    placeholder="Playlist name"
                    pattern="^[A-Za-z0-9_-]{3,20}$"/>
                    }

                    <button className="playlist__editer_submit button" onClick={this.onSubmit.bind(this)}>Change</button>
                </label>
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
	{
        changePlaylistName: changePlaylistName,
    }
  )(PlaylistEditer);
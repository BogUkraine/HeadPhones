import React, {Component} from 'react';

class PlaylistButtons extends Component {
    onEditClick() {
        const editer = document.getElementById('editer');
        editer.style.display = 'flex';
    }

    onShuffleClick() {

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

export default PlaylistButtons;
import React from 'react';

const PlaylistButtons = () => {
	return (
        <div className="playlist__header_buttons">
            <button className="header__buttons_shuffle" value="Shuffle">Shuffle</button>
            <button className="header__buttons_edit" value="Edit">Edit Platlist</button>
        </div>
	);
}

export default PlaylistButtons;
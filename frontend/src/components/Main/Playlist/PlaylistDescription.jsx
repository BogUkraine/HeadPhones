import React from 'react';

import PlaylistButtons from './PlaylistButtons';

const PlaylistDescription = () => {
	return (
        <div className="playlist__header_wrapper">
            <div className="playlist__header_description">
                <h2 className="header__playlist_name">Playlist_name</h2>
                <span className="header__user_name">User_name</span>
                <span className="header__tracks_count">Tracks count</span>
                <span className="header__tracks_time">Time</span>
            </div>
            <PlaylistButtons />
        </div>
	);
}

export default PlaylistDescription;
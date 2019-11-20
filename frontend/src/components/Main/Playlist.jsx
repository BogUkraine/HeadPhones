import React from 'react';

import PlaylistWrapper from './PlaylistTrack';

const Playlist = () => {
	return (
        <main>
            <div className="playlist-main-header">
                <div><img src="headphones1.png" /></div>
                <div className="playlist-main-header__description">
                    <div className="playlist-main-header__description-text">
                        <h2>Playlist_name</h2>
                        <span>User_name</span>&#9679;
                        <span>Tracks count</span>&#9679;
                        <span>Time</span>
                    </div>
                    <div className="playlist-main-header__description-buttons">
                        <button value="Shuffle">Shuffle</button>
                        <button value="Edit">Edit Platlist</button>
                    </div>
                </div>
            </div>

            <div className="playlist-wrapper-music">
                <PlaylistWrapper />
            </div>
        </main>
	);
}

export default Playlist;
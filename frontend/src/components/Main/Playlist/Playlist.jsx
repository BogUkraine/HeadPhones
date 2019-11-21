import React from 'react';

import PlaylistHeader from './PlaylistHeader';
import PlaylistTracks from './PlaylistTracks';

const Playlist = () => {
	return (
        <div className="playlist">
            <PlaylistHeader />
            <PlaylistTracks />
        </div>
	);
}

export default Playlist;
import React from 'react';

import PlaylistHeader from './PlaylistHeader';
import PlaylistList from './PlaylistList';

const Playlist = () => {
	return (
        <div className="playlist">
            <PlaylistHeader />
            <PlaylistList />
        </div>
	);
}

export default Playlist;
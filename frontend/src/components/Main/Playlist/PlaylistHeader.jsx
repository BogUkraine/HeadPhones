import React from 'react';

import PlaylistDescription from './PlaylistDescription';

import image from '../../../images/headphones1.png';

const PlaylistHeader = () => {
	return (
        <div className="playlist__header">
            <img className="playlist__header_img" src={image} alt="playlist_image" />
            <PlaylistDescription />
        </div>
	);
}

export default PlaylistHeader;
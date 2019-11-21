import React from 'react';

const PlaylistTracks = () => {
    return (
        <div className="playlist-music-block">
            <div className="playlist-music-block__track-name-wrapper">
                <div className="playlist-music-block__img"></div>
                <span className="playlist-music-block__track-name">track_name</span>
            </div>
            <div className="playlist-music-block__description">
                <span className="playlist-music-block__singer">singer</span>&#9679;
                <span className="playlist-music-block__album">album</span>&#9679;
                <span className="playlist-music-block__year">2019</span>
            </div>
            <div className="playlist-music-block__time">
                <span className="playlist-">1:01</span>/
                <span className="playlist-">3:30</span>
            </div>
        </div>
    );
}

export default PlaylistTracks;
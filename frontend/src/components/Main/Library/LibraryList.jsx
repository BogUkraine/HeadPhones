import React from 'react';

const LibraryList = () => {
    return (
        <div className="library__track">
            <div className="library__track_title">
                <div className="library__track_img"></div>
                <span className="library__track_name">track_name</span>
            </div>
            <div className="library__track_description">
                <span className="library__track_singer">singer</span>
                <span className="library__track_album">album</span>
                <span className="library__track_year">2019</span>
            </div>
            <div className="library__track_time">
                <span className="">1:01</span>/
                <span className="">3:30</span>
            </div>
        </div>
    );
}

export default LibraryList;
import React from 'react';
import { connect } from 'react-redux';

import QueueList from './QueueList';

const Queue = (props) => {
    return (
        <div className="queue" id="queue">
            <div className="queue__left">
                <img src={props.currentTrack.album_img} alt="" className="queue__image" />
            </div>
            <div className="queue__right">
                <div className="queue__list">
                    <QueueList />
                </div>
            </div>
        </div>
    )
}

export default connect(state => ({
    currentTrack: state.currentTrack,
}),
{}
)(Queue);
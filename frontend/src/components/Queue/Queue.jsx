import React from 'react';

import QueueList from './QueueList';

const Queue = () => {
    return (
        <div className="queue">
            <div className="queue__left">
                <img src="" alt="" className="queue__image" />
            </div>
            <div className="queue__right">
                <div className="queue__list">
                    <QueueList />
                </div>
            </div>
        </div>
    )
}

export default Queue;
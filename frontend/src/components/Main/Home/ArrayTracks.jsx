import React from 'react';

import HomeTrack from './HomeTrack';

const ArrayTracks = ( ({arrayTracks}) => {
    return (
        arrayTracks.map(( value ) => {
            return (
                <HomeTrack
                    track_name={value.track_name}
                    key={value.id}
                />
            );
        })
    );
})

export default ArrayTracks;
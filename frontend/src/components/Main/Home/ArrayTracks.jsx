import React from 'react';

import HomeTrack from './HomeTrack';

const ArrayTracks = ( ({array}) => {
    return (
        array.map(( value ) => {
            return (
                <HomeTrack track_name={value.track_name}/>
            );
        })
    );
})

export default ArrayTracks;
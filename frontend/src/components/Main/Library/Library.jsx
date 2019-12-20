import React, {Component} from 'react';
import { connect } from 'react-redux';

import LibraryInner from './LibraryInner';
import AsiderLeft from './AsiderLeft';
import AsiderRight from './AsiderRight';

class Library extends Component {    
    render() {
        return (
            <div className="library">
                <AsiderLeft />
                <LibraryInner />
                <AsiderRight />
            </div>
        );
    }
}

export default connect(
	state => ({
        tracks: state.tracks,
        queueData: state.queue,
    }),
    {
        changeCheckerTracks: (data) => ({
            type: "CHANGE_CHECKER",
            payload: data
        }),
    }
  )(Library);
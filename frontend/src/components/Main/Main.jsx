import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from "./Home/Home";
import Library from "./Library/Library";
import Playlist from "./Playlist/Playlist";

class Main extends Component {    
    render() {
        return (
            <main className="main" id="main">
                <Route path="/main/home" component={ Home }></Route>
                <Route path="/main/library" component={ Library }></Route>
                <Route path="/main/playlist" component={ Playlist }></Route>
            </main>
        );
    }
}

export default connect(
	state => ({
        checkerQueue: state.checkerQueue,
        tracks: state.tracks,
        queueData: state.queue,
        user: state.user,
    }),
    {
        changeCheckerTracks: (data) => ({
            type: "CHANGE_CHECKER",
            payload: data
        }),
    }
  )(Main);
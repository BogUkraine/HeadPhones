import React from 'react';
import { Route } from 'react-router-dom';

import Home from "./Home";
import Library from "./Library";
import Playlist from "./Playlist";

const Main = () => {
	return (
        <div>
            <Route exact path="/home" component={ Home }></Route>
            <Route path="/library" component={ Library }></Route>
            <Route path="/playlist" component={ Playlist }></Route>
        </div>
	);
}

export default Main;
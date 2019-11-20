import React from 'react';
import { Route } from 'react-router-dom';

import Home from "./Home/Home";
import Library from "./Library/Library";
import Playlist from "./Playlist";

const Main = () => {
	return (
        <main className="main">
            <Route exact path="/home" component={ Home }></Route>
            <Route path="/library" component={ Library }></Route>
            <Route path="/playlist" component={ Playlist }></Route>
        </main>
	);
}

export default Main;
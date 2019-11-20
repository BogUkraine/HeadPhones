import React, { Component } from 'react';

import LibraryWrapper from './LibraryTrack';

const Library = () => {
	return (
        <main>
            <aside>
            </aside>

            <div className="library-wrapper">
                <LibraryWrapper />
            </div>

            <aside className="library-aside-right">
                <div className="library-aside-right__img">
                    <div><img src="images/" alt="kek" /></div>
                    <div><img src="images/" alt="kek" /></div>
                    <div><img src="images/" alt="kek" /></div>
                </div>
            </aside>
        </main>
	);
}

export default Library;
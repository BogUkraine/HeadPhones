import React, { Component } from 'react';

import LibraryInner from './LibraryInner';
import AsiderLeft from './AsiderLeft';
import AsiderRight from './AsiderRight';

const Library = () => {
	return (
        <div className="library">
            <AsiderLeft />
            <LibraryInner />
            <AsiderRight />
        </div>
	);
}

export default Library;
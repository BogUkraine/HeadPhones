import { combineReducers } from 'redux';

import tracks from './tracks';
import playlists from './playlists';
import currentPlaylist from './currentPlaylist';
import currentTrack from './currentTrack';
import user from './user';
import quote from './quote';
import queue from './queue';
import checkerQueue from './checkerQueue';

export default combineReducers({
    user,
    playlists,
    tracks,
    currentPlaylist,
    currentTrack,
    quote,
    checkerQueue,
    queue,
})
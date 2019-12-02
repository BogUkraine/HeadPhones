import { combineReducers } from 'redux';

import tracks from './tracks';
import playlists from './playlists';
import pickedPlaylist from './pickedPlaylist';
import currentTrack from './currentTrack';
import user from './user';
import quote from './quote';
import queue from './queue';
import checkerQueue from './checkerQueue';
import playlistsCount from './playlistsCount';

export default combineReducers({
    user,
    tracks,
    quote,
    playlistsCount,
    playlists,
    pickedPlaylist,
    currentTrack,
    checkerQueue,
    queue,
})
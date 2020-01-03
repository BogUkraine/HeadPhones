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
import footer from './footer';
import search from './search';

export default combineReducers({
    user,
    tracks,
    quote,
    queue,
    playlistsCount,
    playlists,
    pickedPlaylist,
    currentTrack,
    checkerQueue,
    footer,
    search,
})
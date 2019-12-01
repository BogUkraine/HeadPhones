import { combineReducers } from 'redux';

import tracks from './tracks';
import playlists from './playlists';
import users from './users';
import albums from './albums';
import singers from './singers';
import currentUser from './currentUser';
import currentPlaylist from './currentPlaylist';
import currentPlaylists from './currentPlaylistS';
import currentTrack from './currentTrack';
import errors from './errors';
import user from './user'

export default combineReducers({
    user,
    playlists,
    tracks,
    albums,
    singers,
    currentPlaylist,
    currentPlaylists,
    users,
    currentUser,
    currentTrack,
    errors,
})
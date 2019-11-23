import { combineReducers } from 'redux';

import tracks from './tracks';
import playlists from './playlists';
import users from './users';
import albums from './albums';
import singers from './singers';
import currentUser from './currentUser';

export default combineReducers({
    users,
    playlists,
    tracks,
    albums,
    singers,
    currentUser
})
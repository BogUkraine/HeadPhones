//import { delay } from 'redux-saga';
import { takeLatest, all } from 'redux-saga/effects';

import fetchPlaylists from './fetchPlaylists';
import fetchUser from './fetchUser';
import addUser from './addUser';
import fetchPickedPlaylist from './fetchPickedPlaylist';
import fetchQuote from './fetchQuote';
import fetchTopTracks from './fetchTopTracks';

function* checkUserWatcher() {
    yield takeLatest('CHECK_USER', fetchUser);
}

function* addUserWatcher() {
    yield takeLatest('ADD_USER', addUser);
}

function* loadPlaylistsWatcher() {
    yield takeLatest('FETCH_PLAYLISTS', fetchPlaylists);
}

function* fetchPickedPlaylistWatcher() {
    yield takeLatest('FETCH_PICKED_PLAYLIST', fetchPickedPlaylist);
}

function* fetchQuoteWatcher() {
    yield takeLatest('FETCH_QUOTE', fetchQuote);
}

function* fetchTopTracksWathcer() {
    yield takeLatest('FETCH_TOP_TRACKS', fetchTopTracks);
}

export default function* rootSaga() {
    yield all([
        addUserWatcher(),
        checkUserWatcher(),
        loadPlaylistsWatcher(),
        fetchPickedPlaylistWatcher(),
        fetchQuoteWatcher(),
        fetchTopTracksWathcer(),
    ]);
}
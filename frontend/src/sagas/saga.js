//import { delay } from 'redux-saga';
import { takeLatest, all } from 'redux-saga/effects';

import fetchPlaylists from './fetchPlaylists';
import fetchUser from './fetchUser';
import addUser from './addUser';
import fetchPickedPlaylist from './fetchPickedPlaylist';
import fetchQuote from './fetchQuote';
import fetchTopTracks from './fetchTopTracks';
import addPlaylist from './addPlaylist';
import fetchPlaylistsCount from './fetchPlaylistsCount';

function* checkUserWatcher() {
    //yield takeLatest('CHECK_USER', fetchUser);
    yield takeLatest('ADD_USER', addUser);
}

function* fetchQuoteWatcher() {
    yield takeLatest('FETCH_QUOTE', fetchQuote);
}

function* fetchTopTracksWathcer() {
    yield takeLatest('FETCH_TOP_TRACKS', fetchTopTracks);
}

function* fetchPlaylistsCountWatcher() {
    yield takeLatest('FETCH_PLAYLISTS_COUNT', fetchPlaylistsCount);
}

function* playlistsWatcher() {
    yield takeLatest('FETCH_PLAYLISTS', fetchPlaylists);
    yield takeLatest('ADD_PLAYLIST', addPlaylist);
}

function* fetchPickedPlaylistWatcher() {
    yield takeLatest('FETCH_PICKED_PLAYLIST', fetchPickedPlaylist);
}

export default function* rootSaga() {
    yield all([
        checkUserWatcher(),
        playlistsWatcher(),
        fetchPickedPlaylistWatcher(),
        fetchQuoteWatcher(),
        fetchTopTracksWathcer(),
        fetchPlaylistsCountWatcher(),
    ]);
}
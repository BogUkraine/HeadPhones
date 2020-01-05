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
import changePlaylistName from './changePlaylistName';
import addTrackToPlaylist from './addTrackToPlaylist';
import fetchSearch from './fetchSearch';

/*
import {changeFooterSongPercent,
    changeFooterSongTime,
    changeFooterVolumeLevel,
    changeFooterSongDuration} from './changeFooter';
*/

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
    yield takeLatest('CHANGE_PLAYLIST_NAME', changePlaylistName);
    yield takeLatest('ADD_TRACK_TO_PLAYLIST', addTrackToPlaylist);
}

function* fetchPickedPlaylistWatcher() {
    yield takeLatest('FETCH_PICKED_PLAYLIST', fetchPickedPlaylist);
}

function* fetchSearchWatcher() {
    yield takeLatest('FETCH_SEARCH', fetchSearch);
}

/*
function* fetchFooterWatcher() {
    yield takeLatest('CHANGE_FOOTER_SONG_PERCENT', changeFooterSongPercent);
    yield takeLatest('CHANGE_FOOTER_SONG_TIME', changeFooterSongTime);
    yield takeLatest('CHANGE_FOOTER_VOLUME_LEVEL', changeFooterVolumeLevel);
    yield takeLatest('CHANGE_FOOTER_SONG_DURATION', changeFooterSongDuration);
}
*/

export default function* rootSaga() {
    yield all([
        checkUserWatcher(),
        playlistsWatcher(),
        fetchPickedPlaylistWatcher(),
        fetchQuoteWatcher(),
        fetchTopTracksWathcer(),
        fetchPlaylistsCountWatcher(),
        fetchSearchWatcher(),
        //fetchFooterWatcher(),
    ]);
}
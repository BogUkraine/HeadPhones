import axios from 'axios';
import { put, call } from 'redux-saga/effects';

const apiGetPlaylistsCount = (url) => {
    return axios.get(url)
    .then( (response) => {
        return response.data[0];
    })
    .catch(function (error) {
        console.log(error);
    });
}

export default function* fetchPlaylists() {
    const playlistsCount = yield call(apiGetPlaylistsCount, 'http://localhost:3210/playlistsCount');
    yield put({ type: "FETCHED_PLAYLISTS_COUNT_SUCCESS", payload: playlistsCount});
}
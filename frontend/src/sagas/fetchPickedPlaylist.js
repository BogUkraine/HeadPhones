import axios from 'axios';
import { put, call } from 'redux-saga/effects';

const apiGetPickedPlaylist = (url, playlist_id) => {
    return axios.get(url, {
        params: {
            playlist_id: playlist_id
        }
    })
    .then( (response) => {
        return response.data;
    })
    .catch(function (error) {
        console.log(error);
    });
}

export default function* fetchPlaylists({playlist_id}) {
    console.log(playlist_id);
    const pickedPlaylist = yield call(apiGetPickedPlaylist, 'http://localhost:3210/pickedPlaylist', playlist_id);
    yield put({ type: "FETCHED_PICKED_PLAYLIST_SUCCESS", payload: pickedPlaylist});
}
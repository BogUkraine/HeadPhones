import axios from 'axios';
import { put, call } from 'redux-saga/effects';

const apiGetPickedPlaylist = (url, user_id, playlist_id) => {
    return axios.get(url, {
        params: {
            user_id: user_id,
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

export default function* fetchPlaylists({payload: {user_id, playlist_id}}) {
    const pickedPlaylist = yield call(apiGetPickedPlaylist, 'http://localhost:3210/pickedPlaylist', user_id, playlist_id);
    yield put({ type: "FETCHED_PICKED_PLAYLIST_SUCCESS", payload: pickedPlaylist});
}
import axios from 'axios';
import { put, call } from 'redux-saga/effects';

const apiGetPlaylists = (url, user_id) => {
    return axios.get(url, {
        params: {
            user_id: user_id
        }
    })
    .then( (response) => {
        return response.data;
        
    })
    .catch(function (error) {
        console.log(error);
    });
}

export default function* fetchPlaylists({payload: {user_id}}) {
    const pickedPlaylist = yield call(apiGetPlaylists, 'http://localhost:3210/pickedPlaylist', user_id);
    yield put({ type: "FETCHED_PICKED_PLAYLISTS_SUCCESS", data: pickedPlaylist});
}
import axios from 'axios';
import { put, call } from 'redux-saga/effects';

const apiGetPlaylists = (url, user_id) => {
    return axios.get(url, {
        params: {
            user_id: user_id
        }
    })
    .then( (response) => {
        console.log("blyat", response.data)
        return response.data;
    })
    .catch(function (error) {
        console.log(error);
    });
}

export default function* fetchPlaylists({payload: info}) {
    console.log("MSOVMSJDMSVJNVJSNVSVJSI", info);
    const playlists = yield call(apiGetPlaylists, 'http://localhost:3210/playlists', info[0].user_id);
    yield put({ type: "FETCHED_PLAYLISTS_SUCCESS", data: playlists});
}
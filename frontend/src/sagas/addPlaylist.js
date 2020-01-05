import axios from 'axios';
import { put, call } from 'redux-saga/effects';

const apiPostPlaylist = (url, user_id) => {
    axios.post(url, {
        user_id: user_id,
    })
    .then( (response) => {      
        return response.data[0]   
    })
    .catch(function (error) {
        console.log(error);
    });
}

export default function* addPlaylist({payload: {user_id}}) {
    const playlist = yield call(apiPostPlaylist, 'http://localhost:3210/addPlaylist', user_id);
    yield put({ type: "FETCH_PLAYLISTS", payload: [{user_id}]});
}
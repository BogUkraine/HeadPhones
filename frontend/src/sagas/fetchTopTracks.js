import axios from 'axios';
import { put, call } from 'redux-saga/effects';

const apiGetTopTracks = (url) => {
    return axios.get(url)
    .then( (response) => {
        return response.data;
        
    })
    .catch(function (error) {
        console.log(error);
    });
}

export default function* fetchTopTracks() {
    const tracks = yield call(apiGetTopTracks, 'http://localhost:3210/topTracks');
    yield put({ type: "FETCHED_TOP_TRACKS_SUCCESS", data: tracks});
}
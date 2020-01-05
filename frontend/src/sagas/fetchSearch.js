import axios from 'axios';
import { put, call } from 'redux-saga/effects';

const apiGetSearch = (url, track_name) => {
    return axios.get(url, {
        params: {
            track_name: track_name
        }
    })
    .then( (response) => {
        console.log('res', response.data);
        return response.data;
    })
    .catch(function (error) {
        console.log(error);
    });
}

export default function* fetchSearch(data) {
    console.log('tr', data.payload.track_name);
    const tracks = yield call(apiGetSearch, 'http://localhost:3210/search', data.payload.track_name);
    yield put({ type: "FETCHED_SEARCH_SUCCESS", data: tracks});
}
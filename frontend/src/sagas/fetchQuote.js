import axios from 'axios';
import { put, call } from 'redux-saga/effects';

const apiGetQuote = (url) => {
    return axios.get(url)
    .then( (response) => {
        return response.data;
        
    })
    .catch(function (error) {
        console.log(error);
    });
}

export default function* fetchPlaylists() {
    const quote = yield call(apiGetQuote, 'http://localhost:3210/quote');
    yield put({ type: "FETCHED_QUOTE_SUCCESS", data: quote});
}
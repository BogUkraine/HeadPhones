import axios from 'axios';
import { put, call } from 'redux-saga/effects';

const apiChangePlaylistName = (url, playlist_id, playlist_name) => {
    axios.put(url, {
        playlist_id,
        playlist_name
    })
    .then( (response) => {
        console.log('CHANGEDPLAYLISTNAME', response.data);
        return response.data;
    })
    .catch(function (error) {
        console.log(error);
    });
    console.log('playlist_id, pl_name', playlist_id, playlist_name);

    return axios.get('http://localhost:3210/fetchPlaylistName', {
            params: {playlist_id}
        })
        .then( (response) => {
            return response.data[0];
        })
        .catch(function (error) {
            console.log(error);
        });
}

export default function* changePlaylistName({payload: {playlist_id, playlist_name}}) {
    const playlist = yield call(apiChangePlaylistName, 'http://localhost:3210/changePlaylistName', playlist_id, playlist_name);
    console.log(playlist);
    yield put({ type: "CHANGED_PLAYLIST_NAME_SUCCESS",
    payload: {playlist_name: playlist.playlist_name, playlist_id: playlist_id}});
}
import axios from 'axios';
import { put, call } from 'redux-saga/effects';

const apiPostPlaylist = (url, user_id) => {
    axios.post(url, {
        playlist_name: "playlist name"
    })
    .then( (response) => {         
    })
    .catch(function (error) {
        console.log(error);
    });

    axios.get('http://localhost:3210/playlistsCount')
        .then((response) => {
            
            return axios.post('http://localhost:3210/addPlaylist_main', {
                user_id: user_id,
                playlist_id: response.data[0].count+1
            })
            .then((response) => {
            })
            .catch((error) => {
                console.log(error);
            });

        })
        .catch((error) => {
            console.log(error);
        });

}

export default function* addPlaylist({payload: {user_id}}) {
    const playlist = yield call(apiPostPlaylist, 'http://localhost:3210/addPlaylist', user_id);
    console.log("DDDDDDDDDDDDDDDDDD", playlist)
    yield put({ type: "FETCH_PLAYLISTS", payload: [{user_id}]});
}
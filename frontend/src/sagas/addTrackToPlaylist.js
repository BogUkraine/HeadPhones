import axios from 'axios';
import { put, call } from 'redux-saga/effects';

const apiPostTrack = (url, p_id, t_id) => {
    axios.post(url, {
        p_id,
        t_id,
    })
    .then( (response) => {         
    })
    .catch(function (error) {
        console.log(error);
    });
}

export default function* addPlaylist({p_id, t_id}) {
    const track = yield call(apiPostTrack, 'http://localhost:3210/addTrack', p_id, t_id);
    console.log(p_id, t_id);
}
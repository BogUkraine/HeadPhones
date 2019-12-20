import axios from 'axios';
import { put, call } from 'redux-saga/effects';

const apiPostUser = (url, login, password) => {
    return axios.post(url, {
        user_login: login,
        user_password: password
    })
    .then( (response) => {
        return response.data[0];
    })
    .catch(function (error) {
        console.log(error);
    });
}

export default function* addUser({payload: {user_login, user_password}}) {
    const user = yield call(apiPostUser, 'http://localhost:3210/addUser', user_login, user_password);
    yield put({ type: "ADDED_USER_SUCCESS", data: user});
}
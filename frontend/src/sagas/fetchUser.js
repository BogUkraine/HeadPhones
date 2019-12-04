import axios from 'axios';
import { put, call } from 'redux-saga/effects';

const apiGetUser = (url, login, password) => {
    return axios.get(url, {
        params: {
            user_login: login,
            user_password: password
        }
    })
    .then( (response) => {
        return response.data[0];
    })
    .catch(function (error) {
        console.log(error);
    });
}

export default function* fetchUser({payload: {user_login, user_password}}) {
    const user = yield call(apiGetUser, 'http://localhost:3210/checkUser', user_login, user_password);
    if(user !== undefined){
        yield put({ type: "CHECKED_USER_SUCCESS", data: user});
    }
    else {
        yield put({ type: "CHECKED_USER_FAIL", data: {user_id: "initial"}});
    }
}
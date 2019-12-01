import { delay } from 'redux-saga';
import { takeEvery, takeLatest, put, all, call } from 'redux-saga/effects';
import axios from 'axios';

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

const apiGetPlaylists = (url, user_id) => {
    return axios.get(url, {
        params: {
            user_id: user_id
        }
    })
    .then( (response) => {
        return response.data;
    })
    .catch(function (error) {
        console.log(error);
    });
}

function* fetchUser({payload: {user_login, user_password}}) {
    const user = yield call(apiGetUser, 'http://localhost:3210/checkUser', user_login, user_password);
    console.log('CHECKuser', user);
    if(user !== undefined){
        yield put({ type: "CHECKED_USER_SUCCESS", data: user});
    }
    else {
        yield put({ type: "CHECKED_USER_FAIL", data: {user_id: "error"}});
    }
}

function* checkUserWatcher() {
    yield takeLatest('CHECK_USER', fetchUser);
}

function* addUser({payload: {user_login, user_password}}) {
    const user = yield call(apiPostUser, 'http://localhost:3210/addUser', user_login, user_password);
    console.log('ADDuser', user);
    yield put({ type: "ADDED_USER_SUCCESS", data: user});
}

function* addUserWatcher() {
    yield takeLatest('ADD_USER', addUser);
}

function* fetchPlaylists({payload: {user_id}}) {
    const playlists = yield call(apiGetPlaylists, 'http://localhost:3210/playlists', user_id);
    console.log('playlists', playlists);
    yield put({ type: "FETCHED_PLAYLISTS_SUCCESS", data: playlists});
}

function* loadPlaylistsWatcher() {
    yield takeLatest('FETCH_PLAYLISTS', fetchPlaylists);
}

export default function* rootSaga() {
    yield all([
        addUserWatcher(),
        checkUserWatcher(),
        loadPlaylistsWatcher(),
    ]);
}
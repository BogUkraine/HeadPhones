import { delay } from 'redux-saga';
import { takeEvery, takeLatest, put } from 'redux-saga/effects';

function* ageUpAsync() {
    yield delay(4000);
    yield put({
        type: "AGE_UP_ASYNC", value: 1
    })
}

export function* watchAgeUp() {
    yield takeEvery("AGE_UP", ageUpAsync);
}
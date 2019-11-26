import { delay } from 'redux-saga';
import { takeEvery, takeLatest, put, all } from 'redux-saga/effects';
import Api from ''

function* ageUpAsync() {
    yield put({
        type: "AGE_UP_ASYNC", value: 1
    })
}
function* smth() {
    console.log("SAGA smth");
}

function* fetchTracks() {
    //const tracks = yield A
    console.log("SAGA smth");
}

// export function* watchAgeUp() {
//     yield takeEvery("AGE_UP", ageUpAsync);
// }

export default function* rootSaga() {
    yield all([
        ageUpAsync(),
        smth(),
        fetchTracks()
    ]);
}
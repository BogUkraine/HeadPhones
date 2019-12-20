import { put } from 'redux-saga/effects';

export function* changeFooterSongPercent({payload: percent}) {
    yield put({ type: "CHANGED_FOOTER_SONG_PERCENT_SUCCESS", payload: percent});
}

export function* changeFooterSongTime({payload: time}) {
    yield put({ type: "CHANGED_FOOTER_SONG_TIME_SUCCESS", payload: time});
}

export function* changeFooterVolumeLevel({payload: volumeLevel}) {
    yield put({ type: "CHANGED_FOOTER_VOLUME_LEVEL_SUCCESS", payload: volumeLevel});
}

export function* changeFooterSongDuration({payload: duration}) {
    yield put({ type: "CHANGED_FOOTER_SONG_DURATION_SUCCESS", payload: duration});
}
import { call, put, takeLatest } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  fetchSongs,
  createSong,
  updateSong,
  deleteSong,
} from "../../../../api/songApi";
import {
  fetchSongsStart,
  fetchSongsSuccess,
  fetchSongsFailure,
  addSongStart,
  addSongSuccess,
  addSongFailure,
  updateSongStart,
  updateSongSuccess,
  updateSongFailure,
  deleteSongStart,
  deleteSongSuccess,
  deleteSongFailure,
} from "../slice/songSlice";
import { ISong } from "../../../../types/song";

function* fetchSongsSaga(): Generator<any, void, any> {
  try {
    put(fetchSongsStart());
    const songs: ISong[] = yield call(fetchSongs);
    yield put(fetchSongsSuccess(songs));
  } catch (error: any) {
    yield put(fetchSongsFailure(error.message));
  }
}

function* addSongSaga(action: PayloadAction<ISong>): Generator<any, void, any> {
  try {
    put(addSongStart());
    const newSong: ISong = yield call(createSong, action.payload);
    yield put(addSongSuccess(newSong));
  } catch (error: any) {
    yield put(addSongFailure(error.message));
  }
}

function* updateSongSaga(
  action: PayloadAction<ISong>
): Generator<any, void, any> {
  try {
    put(updateSongStart());
    const updatedSongs: ISong = yield call(
      updateSong as any,
      action.payload._id,
      action.payload
    );
    yield put(updateSongSuccess(updatedSongs));
  } catch (error: any) {
    yield put(updateSongFailure(error.message));
  }
}

function* deleteSongSaga(
  action: PayloadAction<string>
): Generator<any, void, any> {
  try {
    put(deleteSongStart());
    yield call(deleteSong, action.payload);
    yield put(deleteSongSuccess(action.payload));
  } catch (error: any) {
    yield put(deleteSongFailure(error.message));
  }
}

function* songSaga() {
  yield takeLatest("songs/fetchSongsStart", fetchSongsSaga);
  yield takeLatest("songs/addSongStart", addSongSaga);
  yield takeLatest("songs/updateSongStart", updateSongSaga);
  yield takeLatest("songs/deleteSongStart", deleteSongSaga);
}

export default songSaga;

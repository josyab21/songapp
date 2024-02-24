import { all } from "redux-saga/effects";
import songSaga from "../app/features/songs/sagas/songSaga";
import artistSaga from "../app/features/songs/sagas/artistSaga";
import albumSaga from "../app/features/songs/sagas/albumSaga";
import genresSaga from "../app/features/songs/sagas/genersSaga";
import statisticsSaga from "../app/features/songs/sagas/statisticsSaga";

export default function* rootSaga() {
  yield all([
    songSaga(),
    statisticsSaga(),
    artistSaga(),
    albumSaga(),
    genresSaga(),
  ]);
}

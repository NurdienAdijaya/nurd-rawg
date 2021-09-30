import axios from "axios";
import { API_KEY, BASE_URL } from "../../constants/constant";
import { put, takeEvery } from "redux-saga/effects";
import * as types from "../../constants/types";

function* getGenres(actions) {
  const { error } = actions;
  try {
    const res = yield axios.get(`${BASE_URL}/genres?key=${API_KEY}`);
    yield put({
      type: types.GET_GENRES_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: types.GET_GENRES_FAIL,
      error: error,
    });
  }
}

export function* watchGetGenres() {
  yield takeEvery(types.GET_GENRES_BEGIN, getGenres);
}

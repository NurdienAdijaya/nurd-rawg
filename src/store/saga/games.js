import axios from "axios";
import { API_KEY, BASE_URL } from "../../constants/constant";
import { put, takeEvery } from "redux-saga/effects";
import * as types from "../../constants/types";

function* getGames(actions) {
  const { error, page } = actions;
  try {
    const res = yield axios.get(
      `${BASE_URL}/games?key=${API_KEY}&page=${page}`
    );
    yield put({
      type: types.GET_GAMES_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: types.GET_GAMES_FAIL,
      error: error,
    });
  }
}

function* getGamesDetail(actions) {
  const { error, id } = actions;
  try {
    const res = yield axios.get(`${BASE_URL}/games/${id}?key=${API_KEY}`);
    yield put({
      type: types.GET_GAMES_DETAIL_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: types.GET_GAMES_DETAIL_FAIL,
      error: error,
    });
  }
}

export function* watchGetGames() {
  yield takeEvery(types.GET_GAMES_BEGIN, getGames);
}
export function* watchGetGamesDetail() {
  yield takeEvery(types.GET_GAMES_DETAIL_BEGIN, getGamesDetail);
}

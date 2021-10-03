import axios from "axios";
import { API_KEY, BASE_URL } from "../../constants/constant";
import { put, takeEvery } from "redux-saga/effects";
import * as types from "../../constants/types";

function* getGames(actions) {
  const { error, page, genre } = actions;
  const genres = genre ? `&genres=${genre}` : "";
  try {
    const res = yield axios.get(
      `${BASE_URL}/games?key=${API_KEY}&page=${page}${genres}`
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

function* getGamesByGenre(actions) {
  const { error, page, genre } = actions;
  const genres = genre ? `genres=${genre}` : "";
  try {
    const res = yield axios.get(
      `${BASE_URL}/games?key=${API_KEY}&page=${page}&${genres}`
    );
    yield put({
      type: types.GET_GAMES_BY_GENRE_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: types.GET_GAMES_BY_GENRE_FAIL,
      error: error,
    });
  }
}

function* getGamesBySearch(actions) {
  const { error, page, body } = actions;
  const search = body ? `search=${body}` : "";
  try {
    const res = yield axios.get(
      `${BASE_URL}/games?key=${API_KEY}&page=${page}&${search}`
    );
    yield put({
      type: types.SEARCH_GAMES_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: types.SEARCH_GAMES_FAIL,
      error: error,
    });
  }
}

function* getGamesByPlatform(actions) {
  const { error, page, platform } = actions;
  const platforms = platform ? `platforms=${platform}` : "";
  try {
    const res = yield axios.get(
      `${BASE_URL}/games?key=${API_KEY}&page=${page}&${platforms}`
    );
    yield put({
      type: types.GET_GAMES_BY_PLATFORM_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: types.GET_GAMES_BY_PLATFORM_FAIL,
      error: error,
    });
  }
}

function* getRated(actions) {
  const { error } = actions;
  try {
    const res = yield axios.get(
      `${BASE_URL}/games?key=${API_KEY}&ordering=-metacritic`
    );
    yield put({
      type: types.GET_RATED_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: types.GET_RATED_FAIL,
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
export function* watchGetGamesByGenre() {
  yield takeEvery(types.GET_GAMES_BY_GENRE_BEGIN, getGamesByGenre);
}
export function* watchGetGamesBySearch() {
  yield takeEvery(types.SEARCH_GAMES_BEGIN, getGamesBySearch);
}
export function* watchGetGamesByPlatform() {
  yield takeEvery(types.GET_GAMES_BY_PLATFORM_BEGIN, getGamesByPlatform);
}
export function* watchGetRated() {
  yield takeEvery(types.GET_RATED_BEGIN, getRated);
}

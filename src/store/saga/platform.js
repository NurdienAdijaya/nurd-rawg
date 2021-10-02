import axios from "axios";
import { API_KEY, BASE_URL } from "../../constants/constant";
import { put, takeEvery } from "redux-saga/effects";
import * as types from "../../constants/types";

function* getPlatform(actions) {
  const { error, id } = actions;
  try {
    const res = yield axios.get(`${BASE_URL}/platforms/${id}?key=${API_KEY}`);
    yield put({
      type: types.GET_PLATFORM_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: types.GET_PLATFORM_FAIL,
      error: error,
    });
  }
}

export function* watchGetPlatform() {
  yield takeEvery(types.GET_PLATFORM_BEGIN, getPlatform);
}

import { all } from "@redux-saga/core/effects";
import { watchGetGames } from "./games";

export default function* rootSaga() {
  yield all([watchGetGames()]);
}

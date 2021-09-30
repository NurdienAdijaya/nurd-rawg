import { all } from "@redux-saga/core/effects";
import { watchGetGames, watchGetGamesDetail } from "./games";

export default function* rootSaga() {
  yield all([watchGetGames(), watchGetGamesDetail()]);
}

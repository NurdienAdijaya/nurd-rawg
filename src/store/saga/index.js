import { all } from "@redux-saga/core/effects";
import { watchGetGames, watchGetGamesDetail } from "./games";
import { watchGetGenres } from "./genres";

export default function* rootSaga() {
  yield all([watchGetGames(), watchGetGamesDetail(), watchGetGenres()]);
}

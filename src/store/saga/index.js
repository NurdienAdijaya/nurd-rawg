import { all } from "@redux-saga/core/effects";
import {
  watchGetGames,
  watchGetGamesByGenre,
  watchGetGamesByPlatform,
  watchGetGamesBySearch,
  watchGetGamesDetail,
} from "./games";
import { watchGetGenres } from "./genres";
import { watchGetPlatform } from "./platform";

export default function* rootSaga() {
  yield all([
    watchGetGames(),
    watchGetGamesDetail(),
    watchGetGamesByGenre(),
    watchGetGamesBySearch(),
    watchGetGamesByPlatform(),
    watchGetPlatform(),
    watchGetGenres(),
  ]);
}

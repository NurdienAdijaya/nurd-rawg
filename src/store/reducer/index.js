import { combineReducers } from "redux";
import games from "./games";
import genres from "./genres";
import platform from "./platform";

export default combineReducers({
  games,
  genres,
  platform,
});

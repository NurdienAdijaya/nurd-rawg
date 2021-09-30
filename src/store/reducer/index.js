import { combineReducers } from "redux";
import games from "./games";
import genres from "./genres";

export default combineReducers({
  games,
  genres,
});

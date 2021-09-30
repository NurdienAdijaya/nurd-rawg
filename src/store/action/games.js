import * as types from "../../constants/types";

export const getGames = (page = "", genre = "") => {
  return {
    type: types.GET_GAMES_BEGIN,
    page,
    genre,
  };
};

export const getGamesDetail = (id) => {
  return {
    type: types.GET_GAMES_DETAIL_BEGIN,
    id,
  };
};

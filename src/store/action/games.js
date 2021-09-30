import * as types from "../../constants/types";

export const getGames = (page = "") => {
  return {
    type: types.GET_GAMES_BEGIN,
    page,
  };
};

export const getGamesDetail = (id) => {
  return {
    type: types.GET_GAMES_DETAIL_BEGIN,
    id,
  };
};

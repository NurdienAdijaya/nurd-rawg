import * as types from "../../constants/types";

export const getGames = (page = "") => {
  return {
    type: types.GET_GAMES_BEGIN,
    page,
  };
};

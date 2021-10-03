import * as types from "../../constants/types";

export const getGames = (page = "1") => {
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

export const getGamesByGenre = (page = "1", genre = "") => {
  return {
    type: types.GET_GAMES_BY_GENRE_BEGIN,
    page,
    genre,
  };
};

export const getGamesByPlatform = (page = "1", platform = "") => {
  return {
    type: types.GET_GAMES_BY_PLATFORM_BEGIN,
    page,
    platform,
  };
};

export const searchGames = (page = "1", body) => {
  return {
    type: types.SEARCH_GAMES_BEGIN,
    page,
    body,
  };
};

export const clearSearch = () => {
  return {
    type: types.CLEAR,
  };
};

export const getRated = () => {
  return {
    type: types.GET_RATED_BEGIN,
  };
};

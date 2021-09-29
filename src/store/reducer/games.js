import * as types from "../../constants/types";

const initialState = {
  listGames: {
    games: [],
    gamesLoading: false,
    gamesSuccess: null,
    gamesError: null,
    gamesMessage: [],
  },
};

const games = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    default:
      return {
        ...state,
      };

    case types.GET_GAMES_BEGIN:
      return {
        ...state,
        listGames: {
          gamesLoading: true,
        },
      };

    case types.GET_GAMES_SUCCESS:
      return {
        ...state,
        listGames: {
          games: payload,
          gamesLoading: false,
        },
      };
    case types.GET_GAMES_FAIL:
      return {
        ...state,
        listGames: {
          gamesError: true,
          gamesLoading: false,
          gamesMessage: payload,
          error: error,
        },
      };
  }
};
export default games;

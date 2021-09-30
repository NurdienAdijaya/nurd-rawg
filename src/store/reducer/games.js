import * as types from "../../constants/types";

const initialState = {
  listGames: {
    games: [],
    gamesLoading: false,
    gamesSuccess: null,
    gamesError: null,
    gamesMessage: [],
  },
  gameDetail: {
    detail: [],
    detailLoading: false,
    detailSuccess: null,
    detailError: null,
    detailMessage: [],
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

    case types.GET_GAMES_DETAIL_BEGIN:
      return {
        ...state,
        gameDetail: {
          detailLoading: true,
        },
      };
    case types.GET_GAMES_DETAIL_SUCCESS:
      return {
        ...state,
        gameDetail: {
          detail: payload,
          detailLoading: false,
        },
      };
    case types.GET_GAMES_DETAIL_FAIL:
      return {
        ...state,
        gameDetail: {
          detailError: true,
          detailLoading: false,
          detailMessage: payload,
          error: error,
        },
      };
  }
};
export default games;

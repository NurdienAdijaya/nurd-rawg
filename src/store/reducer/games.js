import * as types from "../../constants/types";

const initialState = {
  listGames: {
    games: [],
    gamesLoading: false,
    gamesError: null,
    gamesMessage: [],
  },
  gameDetail: {
    detail: [],
    detailLoading: false,
    detailError: null,
    detailMessage: [],
  },

  GamesByGenre: {
    gamesByGenre: [],
    gamesByGenreLoading: false,
    gamesByGenreError: null,
    gamesByGenreMessage: [],
  },
  listSearch: {
    search: [],
    searchLoading: false,
    searchError: null,
    searchMessage: [],
  },
  GamesByPlatform: {
    gamesByPlatform: [],
    gamesByPlatformLoading: false,
    gamesByPlatformError: null,
    gamesByPlatformMessage: [],
  },
  listRated: {
    rated: [],
    ratedLoading: false,
    ratedError: null,
    ratedMessage: [],
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

    case types.GET_GAMES_BY_GENRE_BEGIN:
      return {
        ...state,
        GamesByGenre: {
          gamesByGenreLoading: true,
        },
      };
    case types.GET_GAMES_BY_GENRE_SUCCESS:
      return {
        ...state,
        GamesByGenre: {
          gamesByGenre: payload,
          gamesByGenreLoading: false,
        },
      };
    case types.GET_GAMES_BY_GENRE_FAIL:
      return {
        ...state,
        GamesByGenre: {
          gamesByGenreError: true,
          gamesByGenreLoading: false,
          gamesByGenreMessage: payload,
          error: error,
        },
      };

    case types.SEARCH_GAMES_BEGIN:
      return {
        ...state,
        listSearch: {
          searchLoading: true,
        },
      };
    case types.SEARCH_GAMES_SUCCESS:
      return {
        ...state,
        listSearch: {
          search: payload,
          searchLoading: false,
        },
      };
    case types.SEARCH_GAMES_FAIL:
      return {
        ...state,
        listSearch: {
          searchError: true,
          searchLoading: false,
          searchMessage: payload,
          error: error,
        },
      };

    case types.CLEAR:
      return {
        ...state,
        listSearch: {
          search: [],
          searchLoading: false,
          error: null,
        },
      };

    case types.GET_GAMES_BY_PLATFORM_BEGIN:
      return {
        ...state,
        GamesByPlatform: {
          gamesByPlatformLoading: true,
        },
      };
    case types.GET_GAMES_BY_PLATFORM_SUCCESS:
      return {
        ...state,
        GamesByPlatform: {
          gamesByPlatform: payload,
          gamesByPlatformLoading: false,
        },
      };
    case types.GET_GAMES_BY_PLATFORM_FAIL:
      return {
        ...state,
        GamesByPlatform: {
          gamesByPlatformError: true,
          gamesByPlatformLoading: false,
          gamesByPlatformMessage: payload,
          error: error,
        },
      };

    case types.GET_RATED_BEGIN:
      return {
        ...state,
        listRated: {
          ratedLoading: true,
        },
      };
    case types.GET_RATED_SUCCESS:
      return {
        ...state,
        listRated: {
          rated: payload,
          ratedLoading: false,
        },
      };
    case types.GET_RATED_FAIL:
      return {
        ...state,
        listRated: {
          ratedError: true,
          ratedLoading: false,
          ratedMessage: payload,
          error: error,
        },
      };
  }
};
export default games;

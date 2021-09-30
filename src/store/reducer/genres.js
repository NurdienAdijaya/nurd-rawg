import * as types from "../../constants/types";

const initialState = {
  listGenres: {
    genres: [],
    genresLoading: false,
    genresSuccess: null,
    genresError: null,
    genresMessage: [],
  },
};

const genres = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    default:
      return {
        ...state,
      };

    case types.GET_GENRES_BEGIN:
      return {
        ...state,
        listGenres: {
          genresLoading: true,
        },
      };
    case types.GET_GENRES_SUCCESS:
      return {
        ...state,
        listGenres: {
          genres: payload,
          genresLoading: false,
        },
      };
    case types.GET_GENRES_FAIL:
      return {
        ...state,
        listGenres: {
          genresError: true,
          genresLoading: false,
          genresMessage: payload,
          error: error,
        },
      };
  }
};
export default genres;

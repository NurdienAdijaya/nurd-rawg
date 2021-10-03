import * as types from "../../constants/types";

const initialState = {
  listPlatform: {
    platformName: [],
    platformLoading: false,
    platformError: null,
    platformMessage: [],
  },
};

const platform = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    default:
      return {
        ...state,
      };

    case types.GET_PLATFORM_BEGIN:
      return {
        ...state,
        listPlatform: {
          platformLoading: true,
        },
      };
    case types.GET_PLATFORM_SUCCESS:
      return {
        ...state,
        listPlatform: {
          platformName: payload,
          platformLoading: false,
        },
      };
    case types.GET_PLATFORM_FAIL:
      return {
        ...state,
        listPlatform: {
          platformError: true,
          platformLoading: false,
          platformMessage: payload,
          error: error,
        },
      };
  }
};
export default platform;

import * as types from "../../constants/types";

export const getPlatform = (id) => {
  return {
    type: types.GET_PLATFORM_BEGIN,
    id,
  };
};

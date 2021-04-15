import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESSFUL,
  ORDER_CREATE_FAILED,
  ORDER_CREATE_RESET,
} from "../actions/types";

export const orderCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_CREATE_REQUEST:
      return { loading: true };

    case ORDER_CREATE_SUCCESSFUL:
      return { loading: false, success: true, order: action.payload };

    case ORDER_CREATE_FAILED:
      return { loading: false, success: false, error: action.payload };

    case ORDER_CREATE_RESET:
      return {};

    default:
      return state;
  }
};

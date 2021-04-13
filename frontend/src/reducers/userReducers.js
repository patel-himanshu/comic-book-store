import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESSFUL,
  USER_LOGIN_FAILED,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESSFUL,
  USER_REGISTER_FAILED,
  USER_PROFILE_DETAILS_REQUEST,
  USER_PROFILE_DETAILS_SUCCESSFUL,
  USER_PROFILE_DETAILS_FAILED,
  USER_PROFILE_DETAILS_RESET,
  USER_PROFILE_UPDATE_REQUEST,
  USER_PROFILE_UPDATE_SUCCESSFUL,
  USER_PROFILE_UPDATE_FAILED,
  USER_PROFILE_UPDATE_RESET,
} from "../actions/types";

export const userLoginLogoutReducers = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };

    case USER_LOGIN_SUCCESSFUL:
      return { loading: false, userInfo: action.payload };

    case USER_LOGIN_FAILED:
      return { loading: false, error: action.payload };

    case USER_LOGOUT:
      return {};

    default:
      return state;
  }
};

export const userRegisterReducers = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };

    case USER_REGISTER_SUCCESSFUL:
      return { loading: false, userInfo: action.payload };

    case USER_REGISTER_FAILED:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const userProfileDetailsReducers = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_PROFILE_DETAILS_REQUEST:
      return { ...state, loading: true };

    case USER_PROFILE_DETAILS_SUCCESSFUL:
      return { loading: false, user: action.payload };

    case USER_PROFILE_DETAILS_FAILED:
      return { loading: false, error: action.payload };

    case USER_PROFILE_DETAILS_RESET:
      return { user: {} };

    default:
      return state;
  }
};

export const userProfileUpdateReducers = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_PROFILE_UPDATE_REQUEST:
      return { loading: true };

    case USER_PROFILE_UPDATE_SUCCESSFUL:
      return { loading: false, success: true, userInfo: action.payload };

    case USER_PROFILE_UPDATE_FAILED:
      return { loading: false, success: false, error: action.payload };

    case USER_PROFILE_UPDATE_RESET:
      return {};

    default:
      return state;
  }
};

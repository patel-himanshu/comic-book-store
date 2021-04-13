import axios from "axios";
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
} from "../actions/types";

const config = {
  headers: { "Content-type": "application/json" },
};

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const { data } = await axios.post(
      "/api/user/login/",
      {
        username: email,
        password: password,
      },
      config
    );

    dispatch({ type: USER_LOGIN_SUCCESSFUL, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAILED,
      payload: error,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGOUT });
  dispatch({ type: USER_PROFILE_DETAILS_RESET });
};

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });

    const { data } = await axios.post(
      "/api/user/register/",
      { name, email, password },
      config
    );

    dispatch({ type: USER_REGISTER_SUCCESSFUL, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
    dispatch({ type: USER_LOGIN_SUCCESSFUL, payload: data });
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAILED,
      payload: error,
    });
  }
};

export const getProfileDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_PROFILE_DETAILS_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/user/${id}/`, config);

    dispatch({ type: USER_PROFILE_DETAILS_SUCCESSFUL, payload: data });
  } catch (error) {
    dispatch({
      type: USER_PROFILE_DETAILS_FAILED,
      payload: error,
    });
  }
};

export const updateProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_PROFILE_UPDATE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put("/api/user/profile/update/", user, config);

    dispatch({ type: USER_PROFILE_UPDATE_SUCCESSFUL, payload: data });
    dispatch({ type: USER_LOGIN_SUCCESSFUL, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_PROFILE_UPDATE_FAILED,
      payload: error,
    });
  }
};

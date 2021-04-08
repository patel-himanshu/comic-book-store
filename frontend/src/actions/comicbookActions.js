import axios from "axios";
import {
  COMICBOOK_LIST_REQUEST,
  COMICBOOK_LIST_SUCCESSFUL,
  COMICBOOK_LIST_FAILED,
  COMICBOOK_ITEM_REQUEST,
  COMICBOOK_ITEM_SUCCESSFUL,
  COMICBOOK_ITEM_FAILED,
} from "./types";

export const comicbooksListAction = () => async (dispatch) => {
  try {
    dispatch({ type: COMICBOOK_LIST_REQUEST });
    const response = await axios.get("/api/comicbooks/");
    dispatch({ type: COMICBOOK_LIST_SUCCESSFUL, payload: response.data });
  } catch (error) {
    dispatch({
      type: COMICBOOK_LIST_FAILED,
      payload: error,
    });
  }
};

export const comicbookItemAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: COMICBOOK_ITEM_REQUEST });
    const response = await axios.get(`/api/comicbooks/${id}`);
    dispatch({ type: COMICBOOK_ITEM_SUCCESSFUL, payload: response.data });
  } catch (error) {
    dispatch({
      type: COMICBOOK_ITEM_FAILED,
      payload: error,
    });
  }
};

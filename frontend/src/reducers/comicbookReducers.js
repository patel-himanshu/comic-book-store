import {
  COMICBOOK_LIST_REQUEST,
  COMICBOOK_LIST_SUCCESSFUL,
  COMICBOOK_LIST_FAILED,
  COMICBOOK_ITEM_REQUEST,
  COMICBOOK_ITEM_SUCCESSFUL,
  COMICBOOK_ITEM_FAILED,
} from "../actions/types";

export const comicbookListReducers = (state = { comicbooks: [] }, action) => {
  switch (action.type) {
    case COMICBOOK_LIST_REQUEST:
      return { loading: true, comicbooks: [] };

    case COMICBOOK_LIST_SUCCESSFUL:
      return { loading: false, comicbooks: action.payload };

    case COMICBOOK_LIST_FAILED:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const comicbookItemReducers = (
  state = { comicbook: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case COMICBOOK_ITEM_REQUEST:
      return { loading: true, ...state };

    case COMICBOOK_ITEM_SUCCESSFUL:
      return { loading: false, comicbook: action.payload };

    case COMICBOOK_ITEM_FAILED:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

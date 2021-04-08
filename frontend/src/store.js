import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import {
  comicbookListReducers,
  comicbookItemReducers,
} from "./reducers/comicbookReducers";

const reducer = combineReducers({
  comicbookList: comicbookListReducers,
  comicbookItem: comicbookItemReducers,
});

const initialState = {};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;

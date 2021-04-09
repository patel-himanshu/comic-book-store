import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import {
  comicbookListReducers,
  comicbookItemReducers,
} from "./reducers/comicbookReducers";
import { cartReducer } from "./reducers/cartReducers";

const reducer = combineReducers({
  comicbookList: comicbookListReducers,
  comicbookItem: comicbookItemReducers,
  cart: cartReducer,
});

const cartItemFromLocalStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const initialState = { cart: { cartItems: cartItemFromLocalStorage } };
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

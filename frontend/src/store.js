import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import {
  comicbookListReducers,
  comicbookItemReducers,
} from "./reducers/comicbookReducers";
import { cartReducer } from "./reducers/cartReducers";
import {
  userLoginLogoutReducers,
  userRegisterReducers,
  userProfileDetailsReducers,
  userProfileUpdateReducers,
} from "./reducers/userReducers";

const reducer = combineReducers({
  comicbookList: comicbookListReducers,
  comicbookItem: comicbookItemReducers,
  cart: cartReducer,
  userLogin: userLoginLogoutReducers,
  userRegister: userRegisterReducers,
  userProfileDetails: userProfileDetailsReducers,
  userProfileUpdate: userProfileUpdateReducers,
});

const cartItemFromLocalStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  cart: { cartItems: cartItemFromLocalStorage },
  userLogin: { userInfo: userInfoFromLocalStorage },
};
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

import axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../actions/types";

export const addToCartAction = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/comicbooks/${id}`);

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      id: data.id,
      name: data.name,
      image: data.image,
      price: data.price,
      stock: data.stock,
      quantity: qty,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCartAction = (id) => async (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

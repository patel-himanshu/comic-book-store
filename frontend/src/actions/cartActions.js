import axios from "axios";
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_PAYMENT_MODE,
} from "../actions/types";

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

export const saveShippingAddress = (data) => async (dispatch) => {
  dispatch({
    type: CART_SAVE_SHIPPING_ADDRESS,
    payload: data,
  });

  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

export const savePaymentMode = (data) => async (dispatch) => {
  dispatch({
    type: CART_SAVE_PAYMENT_MODE,
    payload: data,
  });

  localStorage.setItem("paymentMode", JSON.stringify(data));
};

import axios from "axios";
import {
  ADD_TO_CART_FAITUER,
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  GET_CART_DATA,
  GET_DATA_FAITUER,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
} from "./actionTypes";

export const getData = (page) => (dispatch) => {
  dispatch({ type: GET_DATA_REQUEST });
  axios
    .get(`http://localhost:8080/products?_page=${page}&_limit=20`)
    .then((res) => {
      dispatch({ type: GET_DATA_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: GET_DATA_FAITUER });
    });
};
export const getCartData = () => (dispatch) => {
  dispatch({ type: ADD_TO_CART_REQUEST });
  axios
    .get("http://localhost:8080/cart")
    .then((res) => {
      // console.log(res.data);
      dispatch({ type: GET_CART_DATA, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: ADD_TO_CART_FAITUER });
    });
};

export const addToCart = (payload) => (dispatch) => {
  dispatch({ type: ADD_TO_CART_REQUEST });
  axios
    .post("http://localhost:8080/cart", payload)
    .then((res) => {
      dispatch({ type: ADD_TO_CART_SUCCESS, payload });
    })
    .catch((err) => {
      dispatch({ type: ADD_TO_CART_FAITUER });
    });
};

import {
  ADD_TO_CART_FAITUER,
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  GET_CART_DATA,
  GET_DATA_FAITUER,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
} from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  ProductData: [],
  AddToCartLoading:false,
  AddToCartError:false,
  Cart:[]
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DATA_REQUEST:
      return { ...state, isLoading: true, isError: false };

    case GET_DATA_SUCCESS:
      return {
        ...state,
        ProductData: payload,
        isLoading: false,
        isError: false,
      };

    case GET_DATA_FAITUER:
      return { ...state, isLoading: false, isError: true };




    case ADD_TO_CART_REQUEST:
      return { ...state, AddToCartLoading: true, AddToCartError: false };

    case GET_CART_DATA:
      return { ...state, AddToCartLoading: false, AddToCartError: false, Cart:payload };

    case ADD_TO_CART_SUCCESS:
      return { ...state, AddToCartLoading: false, AddToCartError: false, Cart:[...state.Cart, payload] };

    case ADD_TO_CART_FAITUER:
      return { ...state, AddToCartLoading: false, AddToCartError: true };

    default:
      return state;
  }
};

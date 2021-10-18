import { CartActionTypes } from "../types/cart.types";
import { combineReducers } from "redux";

// CART ITEMS LIST REDUCER

const initialState = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const cartListReducer = (state = { cartItems: initialState }, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_TO_CART.SUCCESS:
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x._id === item._id);
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x._id === existItem._id ? item : x
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
      }

    default:
      return state;
  }
};

const cartReducers = combineReducers({
  cartItems: cartListReducer,
});

export default cartReducers;

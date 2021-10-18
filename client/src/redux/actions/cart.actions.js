import { CartActionTypes } from "../types/cart.types";

export const addToCart =
  (pizza, quantity, varient) => async (dispatch, getState) => {
    const cartItem = {
      _id: pizza._id,
      name: pizza.name,
      image: pizza.image,
      varient: varient,
      quantity: quantity,
      prices: pizza.prices,
      price: pizza.prices[0][varient] * quantity,
    };

    dispatch({
      type: CartActionTypes.ADD_TO_CART.SUCCESS,
      payload: cartItem,
    });

    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems.cartItems)
    );
  };

export const removeFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: CartActionTypes.REMOVE_FROM_CART,
    payload: id,
  });

  localStorage.setItem(
    "cartItems",
    JSON.stringify(getState().cart.cartItems.cartItems)
  );
};

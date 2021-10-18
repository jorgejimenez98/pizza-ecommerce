import { CartActionTypes } from "../types/cart.types";

export const addToCart =
  (pizza, quantity, varient) => async (dispatch, getState) => {
    const cartItem = {
      _id: pizza._id,
      name: pizza.name,
      image: pizza.image,
      varient: pizza.varient,
      quantity: pizza.quantity,
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

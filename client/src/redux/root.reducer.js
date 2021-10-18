import { combineReducers } from "redux";

// Reducers
import pizzasReducers from "./reducers/pizzas.reducers";
import cartReducers from "./reducers/cart.reducers";

export default combineReducers({
  pizzas: pizzasReducers,
  cart: cartReducers,
});

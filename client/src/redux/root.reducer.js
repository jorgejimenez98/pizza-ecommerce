import { combineReducers } from "redux";

// Reducers
import pizzasReducers from "./reducers/pizzas.reducers";
import cartReducers from "./reducers/cart.reducers";
import userRedicers from "./reducers/user.reducers";
import snackbarReducer from "./reducers/snackbar.reducers";

export default combineReducers({
  pizzas: pizzasReducers,
  cart: cartReducers,
  users: userRedicers,
  snackbar: snackbarReducer,
});

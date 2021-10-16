import { combineReducers } from "redux";

// Reducers
import pizzasReducers from "./reducers/pizzas.reducers";

export default combineReducers({
  pizzas: pizzasReducers,
});

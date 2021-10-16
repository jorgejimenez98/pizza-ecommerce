import { PizzaActionTypes } from "../types/pizzas.types";
import { combineReducers } from "redux";

// PIZZAS LIST REDUCER

const pizzasListReducer = (state = { pizzas: [] }, action) => {
  switch (action.type) {
    case PizzaActionTypes.PIZZAS_LIST.REQUEST:
      return { loading: true };

    case PizzaActionTypes.PIZZAS_LIST.SUCCESS:
      return { loading: false, pizzas: action.payload };

    case PizzaActionTypes.PIZZAS_LIST.ERROR:
      return { loading: false, error: action.payload };

    case PizzaActionTypes.PIZZAS_LIST.RESET:
      return { pizzas: [] };

    default:
      return state;
  }
};

const pizzasReducers = combineReducers({
  list: pizzasListReducer,
});

export default pizzasReducers;

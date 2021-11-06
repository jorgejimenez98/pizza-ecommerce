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

// PIZZAS ADD REDUCER

const pizzasAddReducer = (state = {}, action) => {
  switch (action.type) {
    case PizzaActionTypes.ADD.REQUEST:
      return { loading: true };

    case PizzaActionTypes.ADD.SUCCESS:
      return { loading: false, success: true };

    case PizzaActionTypes.ADD.ERROR:
      return { loading: false, error: action.payload };

    case PizzaActionTypes.ADD.RESET:
      return {};

    default:
      return state;
  }
};

// PIZZAS DELETE REDUCER

const pizzasDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PizzaActionTypes.DELETE.REQUEST:
      return { loading: true };

    case PizzaActionTypes.DELETE.SUCCESS:
      return { loading: false, success: true };

    case PizzaActionTypes.DELETE.ERROR:
      return { loading: false, error: action.payload };

    case PizzaActionTypes.DELETE.RESET:
      return {};

    default:
      return state;
  }
};

// PIZZAS DETAILS REDUCER

const pizzasDetailsReducer = (state = { pizza: {} }, action) => {
  switch (action.type) {
    case PizzaActionTypes.DETAILS.REQUEST:
      return { loading: true };

    case PizzaActionTypes.DETAILS.SUCCESS:
      return { loading: false, pizza: action.payload };

    case PizzaActionTypes.DETAILS.ERROR:
      return { loading: false, error: action.payload };

    case PizzaActionTypes.DETAILS.RESET:
      return { pizza: {} };

    default:
      return state;
  }
};

// PIZZAS EDIT REDUCER

const pizzasEditReducer = (state = {}, action) => {
  switch (action.type) {
    case PizzaActionTypes.EDIT.REQUEST:
      return { loading: true };

    case PizzaActionTypes.EDIT.SUCCESS:
      return { loading: false, success: true };

    case PizzaActionTypes.EDIT.ERROR:
      return { loading: false, error: action.payload };

    case PizzaActionTypes.EDIT.RESET:
      return {};

    default:
      return state;
  }
};

const pizzasReducers = combineReducers({
  list: pizzasListReducer,
  add: pizzasAddReducer,
  delete: pizzasDeleteReducer,
  details: pizzasDetailsReducer,
  edit: pizzasEditReducer,
});

export default pizzasReducers;

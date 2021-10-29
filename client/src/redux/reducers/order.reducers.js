import { OrderActionTypes } from "../types/order.types";
import { combineReducers } from "redux";

// PIZZAS LIST REDUCER

const addOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case OrderActionTypes.ADD_ORDER.REQUEST:
      return { loading: true };

    case OrderActionTypes.ADD_ORDER.SUCCESS:
      return { loading: false, success: true };

    case OrderActionTypes.ADD_ORDER.ERROR:
      return { loading: false, error: action.payload };

    case OrderActionTypes.ADD_ORDER.RESET:
      return {};

    default:
      return state;
  }
};

const orderReducers = combineReducers({
  add: addOrderReducer,
});

export default orderReducers;

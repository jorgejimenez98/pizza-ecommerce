import { OrderActionTypes } from "../types/order.types";
import { combineReducers } from "redux";

// ADD ORDER REDUCER

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

// USER ORDERS REDUCER

const userOrdersReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case OrderActionTypes.USER_ORDERS_LIST.REQUEST:
      return { loading: true };

    case OrderActionTypes.USER_ORDERS_LIST.SUCCESS:
      return { loading: false, orders: action.payload };

    case OrderActionTypes.USER_ORDERS_LIST.ERROR:
      return { loading: false, error: action.payload };

    case OrderActionTypes.USER_ORDERS_LIST.RESET:
      return {};

    default:
      return state;
  }
};

//  ORDERS LIST REDUCER

const ordersListReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case OrderActionTypes.LIST.REQUEST:
      return { loading: true };

    case OrderActionTypes.LIST.SUCCESS:
      return { loading: false, orders: action.payload };

    case OrderActionTypes.LIST.ERROR:
      return { loading: false, error: action.payload };

    case OrderActionTypes.LIST.RESET:
      return { orders: [] };

    default:
      return state;
  }
};

//  ORDERS EDIT REDUCER

const ordersEditReducer = (state = {}, action) => {
  switch (action.type) {
    case OrderActionTypes.EDIT.REQUEST:
      return { loading: true };

    case OrderActionTypes.EDIT.SUCCESS:
      return { loading: false, success: true };

    case OrderActionTypes.EDIT.ERROR:
      return { loading: false, error: action.payload };

    case OrderActionTypes.EDIT.RESET:
      return {};

    default:
      return state;
  }
};

const orderReducers = combineReducers({
  add: addOrderReducer,
  userOrders: userOrdersReducer,
  list: ordersListReducer,
  edit: ordersEditReducer,
});

export default orderReducers;

const ADD = {
  REQUEST: "ORDER_ADD_REQUEST",
  SUCCESS: "ORDER_ADD_SUCCESS",
  ERROR: "ORDER_ADD_ERROR",
  RESET: "ORDER_ADD_RESET",
};

const USER_ORDERS_LIST = {
  REQUEST: "USER_ORDERS_LIST_REQUEST",
  SUCCESS: "USER_ORDERS_LIST_SUCCESS",
  ERROR: "USER_ORDERS_LIST_ERROR",
  RESET: "USER_ORDERS_LIST_RESET",
};

const ORDERS_LIST = {
  REQUEST: "ORDERS_LIST_REQUEST",
  SUCCESS: "ORDERS_LIST_SUCCESS",
  ERROR: "ORDERS_LIST_ERROR",
  RESET: "ORDERS_LIST_RESET",
};

export const OrderActionTypes = {
  ADD_ORDER: ADD,
  USER_ORDERS_LIST: USER_ORDERS_LIST,
  LIST: ORDERS_LIST,
};

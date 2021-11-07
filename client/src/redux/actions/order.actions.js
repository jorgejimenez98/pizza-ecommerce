import { OrderActionTypes } from "../types/order.types";
import axios from "axios";
import { getConfig } from "../settings";

export const addUserOrder = (values) => async (dispatch) => {
  try {
    dispatch({
      type: OrderActionTypes.ADD_ORDER.REQUEST,
    });

    await axios.post(`/api/orders`, values);

    dispatch({
      type: OrderActionTypes.ADD_ORDER.SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: OrderActionTypes.ADD_ORDER.ERROR,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const getUserOrders = (userId) => async (dispatch) => {
  try {
    dispatch({
      type: OrderActionTypes.USER_ORDERS_LIST.REQUEST,
    });

    const { data } = await axios.post(`/api/orders/user/${userId}`);

    dispatch({
      type: OrderActionTypes.USER_ORDERS_LIST.SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: OrderActionTypes.USER_ORDERS_LIST.ERROR,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const getOrdersList = () => async (dispatch) => {
  try {
    dispatch({
      type: OrderActionTypes.LIST.REQUEST,
    });

    const { data } = await axios.get(`/api/orders`);

    dispatch({
      type: OrderActionTypes.LIST.SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: OrderActionTypes.LIST.ERROR,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const editOrder = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: OrderActionTypes.EDIT.REQUEST,
    });

    await axios.put(`/api/orders/${id}`, {}, getConfig(getState()));

    dispatch({
      type: OrderActionTypes.EDIT.SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: OrderActionTypes.EDIT.ERROR,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

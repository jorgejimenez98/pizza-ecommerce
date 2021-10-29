import { OrderActionTypes } from "../types/order.types";
import axios from "axios";

export const addOrder = (values) => async (dispatch) => {
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

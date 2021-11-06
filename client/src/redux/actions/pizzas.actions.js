import { PizzaActionTypes } from "../types/pizzas.types";
import axios from "axios";
import { getConfig } from "../settings";

export const getPizzasList =
  (keyword = "") =>
  async (dispatch) => {
    try {
      dispatch({
        type: PizzaActionTypes.PIZZAS_LIST.REQUEST,
      });

      const { data } = await axios.get(`/api/pizzas/getPizzas/${keyword}`);

      dispatch({
        type: PizzaActionTypes.PIZZAS_LIST.SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: PizzaActionTypes.PIZZAS_LIST.ERROR,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };

export const addPizza = (values) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PizzaActionTypes.ADD.REQUEST,
    });

    await axios.post(`/api/pizzas/`, values, getConfig(getState()));

    dispatch({
      type: PizzaActionTypes.ADD.SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: PizzaActionTypes.ADD.ERROR,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

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

export const deletePizzas = (values) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PizzaActionTypes.DELETE.REQUEST,
    });

    await axios.post(`/api/pizzas/deletePizzas`, values, getConfig(getState()));

    dispatch({
      type: PizzaActionTypes.DELETE.SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: PizzaActionTypes.DELETE.ERROR,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const getPizzaDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PizzaActionTypes.DETAILS.REQUEST,
    });

    const { data } = await axios.get(
      `/api/pizzas/${id}`,
      getConfig(getState())
    );

    dispatch({
      type: PizzaActionTypes.DETAILS.SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PizzaActionTypes.DETAILS.ERROR,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const editPizza = (id, values) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PizzaActionTypes.EDIT.REQUEST,
    });

    await axios.put(`/api/pizzas/edit/${id}`, values, getConfig(getState()));

    dispatch({
      type: PizzaActionTypes.EDIT.SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: PizzaActionTypes.EDIT.ERROR,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

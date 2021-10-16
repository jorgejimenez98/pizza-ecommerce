import { PizzaActionTypes } from "../types/pizzas.types";
import axios from "axios";

export const getPizzasList = () => async (dispatch) => {
  try {
    dispatch({
      type: PizzaActionTypes.PIZZAS_LIST.REQUEST,
    });

    const { data } = await axios.get(`/api/getPizzas/`, config);

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

/* 
    const {
      userLogin: { userInfo },
    } = getState().user;

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

*/

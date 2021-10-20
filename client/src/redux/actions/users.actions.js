import { UserActionTypes } from "../types/user.types";
import axios from "axios";

export const logout = () => async (dispatch) => {
  dispatch({ type: UserActionTypes.LOGIN.RESET });
  localStorage.removeItem("user-login");
};

export const loginUser = (values) => async (dispatch) => {
  try {
    dispatch({
      type: UserActionTypes.LOGIN.REQUEST,
    });
    console.log(values);
    const { data } = await axios.post(`/api/users/login/`, values);

    dispatch({
      type: UserActionTypes.LOGIN.SUCCESS,
      payload: data,
    });

    localStorage.setItem("user-login", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: UserActionTypes.LOGIN.ERROR,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const registerUser = (values) => async (dispatch) => {
  try {
    dispatch({
      type: UserActionTypes.REGISTER.REQUEST,
    });

    await axios.post(`/api/users/register/`, values);

    dispatch({
      type: UserActionTypes.REGISTER.SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: UserActionTypes.REGISTER.ERROR,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

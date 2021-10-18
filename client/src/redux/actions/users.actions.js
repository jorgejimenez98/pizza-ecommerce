import { UserActionTypes } from "../types/user.types";
import axios from "axios";

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

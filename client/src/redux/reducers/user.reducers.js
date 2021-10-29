import { UserActionTypes } from "../types/user.types";
import { combineReducers } from "redux";

// USER LOGIN REDUCER
const initialState = localStorage.getItem("user-login")
  ? JSON.parse(localStorage.getItem("user-login"))
  : null;

const userLoginReducer = (state = { user_login: initialState }, action) => {
  switch (action.type) {
    case UserActionTypes.LOGIN.REQUEST:
      return { loading: true };

    case UserActionTypes.LOGIN.SUCCESS:
      return { loading: false, user_login: action.payload };

    case UserActionTypes.LOGIN.ERROR:
      return { loading: false, error: action.payload };

    case UserActionTypes.LOGIN.RESET:
      return {};

    default:
      return state;
  }
};

// USER REGISTER REDUCER

const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case UserActionTypes.REGISTER.REQUEST:
      return { loading: true };

    case UserActionTypes.REGISTER.SUCCESS:
      return { loading: false, success: true };

    case UserActionTypes.REGISTER.ERROR:
      return { loading: false, error: action.payload };

    case UserActionTypes.REGISTER.RESET:
      return {};

    default:
      return state;
  }
};

const userRedicers = combineReducers({
  create: userRegisterReducer,
  login: userLoginReducer,
});

export default userRedicers;

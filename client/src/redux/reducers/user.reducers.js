import { UserActionTypes } from "../types/user.types";
import { combineReducers } from "redux";

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
});

export default userRedicers;

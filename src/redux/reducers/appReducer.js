import { LOGIN_FAILED, LOGIN_SUCCESS, LOG_OUT, SET_LOADING } from "../action";

const initState = {
  isLoading: false,
  loginData: null,
  loggedIn: false,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginData: action.payload,
        loggedIn: true,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        loginData: action.payload,
      };
    case LOG_OUT:
      return {
        ...state,
        loginData: null,
        loggedIn: false,
      };
    default:
      return state;
  }
};

export default reducer;

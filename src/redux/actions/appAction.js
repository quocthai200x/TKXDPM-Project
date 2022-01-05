import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app, auth } from "../../firebase/config";
import {
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOG_OUT,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
} from "../action";

export const login = (email, password) => {
  // const auth = getAuth();
  return async (dispatch) => {
    try {
      const result = await signInWithEmailAndPassword(
        getAuth(),
        email,
        password
      );
      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          success: true,
          data: result,
        },
      });
    } catch (e) {
      let alertText;
      switch (e.code) {
        case "auth/user-not-found":
          alertText = "Không tìm thấy người dùng";
          break;
        case "auth/invalid-email":
          alertText = "Email không hợp lệ";
          break;
        case "auth/wrong-password":
          alertText = "Sai mật khẩu";
          break;
        case "auth/user-disabled":
          alertText = "Tài khoản đã bị khóa";
          break;
        default:
          alertText = e.code;
      }
      dispatch({
        type: LOGIN_FAILED,
        payload: {
          data: alertText,
        },
      });
    }
  };
};

export const register = (name, email, password) => {
  return (dispatch) => {
    dispatch({ type: REGISTER_SUCCESS });
  };
};

export const logOut = () => {
  return (dispatch) => {
    dispatch({ type: LOG_OUT });
  };
};

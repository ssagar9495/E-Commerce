import { LOGIN, SUCCESS, LOGOUT, REQUEST, FAIL } from "./actionTypes";
// import { login, logout } from "../../apis";
import { toast } from "react-toastify";
import { ROUTES } from "../../router/routes";

export const handleLogin = (payload, navigate) => {
  return (dispatch) => {
    dispatch({
      type: LOGIN[REQUEST],
    });
    if (payload.email === "sagar@gmail.com" && payload.password === "123") {
      toast.success("Login successful!");
      dispatch({
        type: LOGIN[SUCCESS],
        data: {
          firstName: "Sagar",
          LastName: "Rana",
          userName: "sagar@gmail.com",
          passwodr: "123",
        },
      });
      navigate(ROUTES.DASHBOARD);
    } else {
      dispatch({
        type: LOGIN[FAIL],
      });
    }
    // login(payload)
    //   .then((res) => {
    //     toast.success("Login successful!");
    //     dispatch({
    //       type: LOGIN[SUCCESS],
    //       data: res?.data,
    //     });
    //   })
    //   .catch(() => {
    //     dispatch({
    //       type: LOGIN[FAIL],
    //     });
    //   });
  };
};

export const handleLogout = (auto) => {
  return (dispatch) => {
    if (auto) {
      dispatch({
        type: LOGOUT[SUCCESS],
      });
    } else {
      toast.success("Logout successful!");
      dispatch({
        type: LOGOUT[SUCCESS],
      });
      // logout()
      //   .then((res) => {
      //     toast.success("Logout successful!");
      //     dispatch({
      //       type: LOGOUT[SUCCESS],
      //     });
      //   })
      //   .catch((err) =>
      //     dispatch({
      //       type: LOGOUT[FAIL],
      //     })
      //   );
    }
  };
};

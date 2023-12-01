import { LOGIN, LOGOUT, SUCCESS, REQUEST, FAIL } from "../actions/actionTypes";

const initialState = {
  loading: false,
  isLoggedIn: false,
  accessToken: null,
  type: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN[REQUEST]:
      return {
        ...state,
        loading: true,
      };

    case LOGIN[SUCCESS]:
      return {
        ...state,
        loading: false,
        isLoggedIn: true,
        ...action?.data,
      };

    case LOGIN[FAIL]:
      return {
        ...state,
        loading: false,
      };

    case LOGOUT[SUCCESS]:
      return { ...initialState };

    default:
      return state;
  }
};

export default authReducer;

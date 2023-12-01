export const REQUEST = "REQUEST";
export const SUCCESS = "SUCCESS";
export const FAIL = "FAIL";

export const createRequestTypes = (base) => {
  return [REQUEST, SUCCESS, FAIL].reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});
};

export const LOGIN = createRequestTypes("LOGIN");
export const LOGOUT = createRequestTypes("LOGOUT");

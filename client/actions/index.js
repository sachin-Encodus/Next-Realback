export const GET_USER = "GET_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const DEVICE_DATA = "DEVICE_DATA";
export const ADD_TO_CART = "ADD_TO_CART";
export const rootUser = (user) => {
  return {
    type: GET_USER,
    payload: user,
  };
};

export const setDeviceData = (product) => {
  return {
    type: DEVICE_DATA,
    payload: product,
  };
};

export const logoutUser = () => ({
  type: LOGOUT_USER,
  payload: null,
});

export const addtoCart = (cartItems) => ({
  type: ADD_TO_CART,
  payload: cartItems,
});

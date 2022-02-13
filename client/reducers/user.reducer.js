import {
  GET_USER,
  LOGOUT_USER,
  REMOVE_PRODUCT_FROM_CART,
} from "../actions/index";
const initialState = {
  userData: null,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER: {
      console.log(action);
      return {
        ...state,
        userData: action.payload,
      };
    }
    case LOGOUT_USER: {
      console.log(action);
      return {
        ...state,
        userData: action.payload,
      };
    }
    default:
      return state;
  }
};
export default userReducer;

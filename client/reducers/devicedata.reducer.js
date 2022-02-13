import {DEVICE_DATA} from "../actions/index";


const initialState = {
  devicedata: null,
};
const deviceData = (state = initialState, action) => {
  switch (action.type) {
    case DEVICE_DATA: {
      console.log(action);
      return {
        ...state,
        devicedata: action.payload,
      };
    }
    // case LOGOUT_USER: {
    //   console.log(action);
    //   return {
    //     ...state,
    //     userData: action.payload,
    //   };
    // }
    default:
      return state;
  }
};
export default deviceData;
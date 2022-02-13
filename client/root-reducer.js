import { combineReducers } from "redux";

// import ourTeamReducer from "./components/OurTeam/OurTeam.reducers";
// import shopCategoriesReducer from "./components/ShopCategories/ShopCatergories.reducer";
// import cartReducer from "./reducers/cart";
// import productsReducer from "./reducers/products.reducer";
import userReducer from "./reducers/user.reducer";
import deviceData from "./reducers/devicedata.reducer";
import cartdata from "./reducers/cartdata.reducer";
export const rootReducer = combineReducers({
  // teamMembers: ourTeamReducer,
  // shopCategories: shopCategoriesReducer,
  // cart: cartReducer,
  // products: productsReducer,
  cartdata,
  deviceData,
  userReducer,
});

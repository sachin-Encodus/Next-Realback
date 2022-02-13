import { ADD_TO_CART } from "../actions/index";

const initialState = {
  cartData: null,
};
const cartdata = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      console.log(action);
      return {
        ...state,
        cartData: action.payload,
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
export default cartdata;

// function cartReducer(state = [], action) {
//   switch (action.type) {
//     case ADD_TO_CART: {
//       const { product: productToAdd, quantity = 1 } = action.payload;
//       const productsInCart = [...state];

//       let isProductInCart = false;
//       for (let i = 0; i < productsInCart.length; i++) {
//         const product = productsInCart[i];

//         if (product.id === productToAdd.id) {
//           product.quantity = product.quantity + parseInt(quantity);
//           isProductInCart = true;
//           break;
//         }
//       }

//       if (!isProductInCart) {
//         productToAdd.quantity = parseInt(quantity);
//         productsInCart.push(productToAdd);
//       }
//       return productsInCart;
//     }
//     case UPDATE_PRODUCT_QUANTITY: {
//       const { productId, quantity: quantityToSet = 1 } = action.payload;
//       const productsInCart = [...state];

//       for (let i = 0; i < productsInCart.length; i++) {
//         const product = productsInCart[i];

//         if (product.id === productId) {
//           product.quantity = parseInt(quantityToSet);
//           break;
//         }
//       }

//       return productsInCart;
//     }
//     case REMOVE_PRODUCT_FROM_CART: {
//       return state.filter((product) => product.id !== action.payload);
//     }
//     default:
//       return state;
//   }
// }

// export default cartReducer;

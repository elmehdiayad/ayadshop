import CartTypes from "./cart.types";
import { addItemToCart } from "./cart.utiles";

const INTITIAL_STATE = {
  hidden : true,
  cartItems : []
}

const cartReducer = (state = INTITIAL_STATE, action) => {
  switch (action.type){
    case CartTypes.SET_CART_STATE:
      return {
        ...state,
        hidden: !state.hidden
      };
    case CartTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      }
    default:
      return state
  }
}

export default cartReducer;
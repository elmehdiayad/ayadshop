import CartTypes from "./cart.types";
import { addItemToCart, decreaseItemQuantity } from "./cart.utiles";


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
    case CartTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(cartItem => (cartItem.id !== action.payload.id))
      }
    case CartTypes.INCREASE_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map( cartItem =>
          cartItem.id === action.payload.id
          ? {...cartItem, quantity: cartItem.quantity + 1}
          : cartItem
        )
      }
    case CartTypes.DECREASE_QUANTITY:
      return {
        ...state,
        cartItems: decreaseItemQuantity(state.cartItems, action.payload)
      }
    default:
      return state
  }
}

export default cartReducer;
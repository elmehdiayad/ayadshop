import CartTypes from "./cart.types";

const INTITIAL_STATE = {
  hidden : true
}

const cartReducer = (state = INTITIAL_STATE, action) => {
  switch (action.type){
    case CartTypes.SET_CART_STATE:
      return {
        ...state,
        hidden: !state.hidden
      };
      default:
        return state
  }
}

export default cartReducer;
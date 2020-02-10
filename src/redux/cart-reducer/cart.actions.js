import CartTypes from "./cart.types"


export const changeCartState = () => ({
  type: CartTypes.SET_CART_STATE
});

export const addItem = item => ({
  type: CartTypes.ADD_ITEM,
  payload: item
});
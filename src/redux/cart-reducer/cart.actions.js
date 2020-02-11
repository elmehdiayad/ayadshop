import CartTypes from "./cart.types"


export const changeCartState = () => ({
  type: CartTypes.SET_CART_STATE
});

export const addItem = item => ({
  type: CartTypes.ADD_ITEM,
  payload: item
});

export const removeItem = item => ({
  type: CartTypes.REMOVE_ITEM,
  payload: item
});
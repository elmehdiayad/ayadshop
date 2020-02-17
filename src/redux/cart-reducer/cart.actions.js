import CartTypes from "./cart.types"


export const changeCartState = () => ({
  type: CartTypes.SET_CART_STATE
});

export const addItem = item => ({
  type: CartTypes.ADD_ITEM,
  payload: item
});

export const increaseQuantity = item => ({
  type: CartTypes.INCREASE_QUANTITY,
  payload: item
});

export const decreaseQuantity = item => ({
  type: CartTypes.DECREASE_QUANTITY,
  payload: item
});

export const removeItem = item => ({
  type: CartTypes.REMOVE_ITEM,
  payload: item
});

export const clearCart = () => ({
  type: CartTypes.CLEAR_CART
})
import {createSelector} from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
)

export const selectCartState = createSelector(
  [selectCart],
  cart => cart.hidden
)

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((total, cartItems) => (total + cartItems.price * cartItems.quantity), 0)
)
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((counter, cartItems) => (cartItems.quantity + counter), 0)
)
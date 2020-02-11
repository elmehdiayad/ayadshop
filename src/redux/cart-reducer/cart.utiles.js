export const addItemToCart = (cartItems, itemToAdd) => {
  const exists = cartItems.find(
    cartItem => cartItem.id === itemToAdd.id
  );
  if(exists){
    return (
      cartItems.map( cartItem =>
        cartItem.id === itemToAdd.id
        ? {...cartItem, quantity: cartItem.quantity + 1}
        : cartItem
      )
    );
  }
  return [...cartItems, {...itemToAdd, quantity : 1}];  
}


export const decreaseItemQuantity = (cartItems, item) => {

  if (item.quantity === 1){
    return cartItems.filter(cartItem => (cartItem.id !== item.id));
  }
  return cartItems.map(cartItem =>
    cartItem.id === item.id
    ? {...cartItem, quantity: cartItem.quantity - 1}
    : cartItem
  )
}
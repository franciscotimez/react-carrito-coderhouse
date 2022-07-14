import React, { createContext, useState } from 'react';

export const Shop = createContext();

const CartContext = ({ children }) => {

  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    const productExists = isInCart(product.id);
    console.log(productExists)
    if (productExists) {
      productExists.quantity += quantity;
      setCart([...cart]);
    }
    else {
      setCart([...cart, { ...product, quantity: quantity}]);
    }
    console.log(cart);
  };

  const isInCart = (productId) => {
    return cart.find(element => element.id === productId)
  };

  return (
    <Shop.Provider value={{ addToCart, cart}}>
      {children}
    </Shop.Provider>
  );
};

export default CartContext;
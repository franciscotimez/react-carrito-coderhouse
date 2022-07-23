import React, { createContext, useEffect, useState } from 'react';

export const Shop = createContext();

const CartContext = ({ children }) => {

  const [cart, setCart] = useState([]);
  const [cartResume, setCartResume] = useState([]);

  useEffect(() => {
    const precioTotal = cart.reduce((total, curr) => total + curr.subTotal, 0)
    const itemsTotal = cart.reduce((total, curr) => total + curr.quantity, 0)

    setCartResume({
      precioTotal: precioTotal,
      itemsTotal: itemsTotal
    })
  }, [cart])
  

  const addToCart = (product, quantity) => {
    const productExists = isInCart(product.id);
    console.log(productExists)
    if (productExists) {
      productExists.quantity += quantity;
      productExists.subTotal = productExists.quantity * product.price
      setCart([...cart]);
    }
    else {
      setCart([...cart, { ...product, quantity: quantity, subTotal: (quantity * product.price) }]);
    }
    console.log(cart);
  };

  const removeToCart = (productId) => {
    setCart(cart.filter(element => element.id !== productId));
    return 
  };

  const clearCart = () => {
    setCart([]);
    return 
  };

  const isInCart = (productId) => {
    return cart.find(element => element.id === productId)
  };

  return (
    <Shop.Provider value={{ addToCart, removeToCart, cart, cartResume, clearCart}}>
      {children}
    </Shop.Provider>
  );
};

export default CartContext;
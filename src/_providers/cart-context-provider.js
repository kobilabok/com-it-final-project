"use client";

import { createContext, useState, useContext, useEffect } from "react";

export const CartContext = createContext({});

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addItemToCart = (item) => {
    if (!cart.some((cartItem) => cartItem.pkg.id === item.pkg.id)) {
      setCart([...cart, item]);
    } else {
      alert("Item you are trying to select is already in the cart.");
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const removeItemFromCart = (id) => {
    setCart(cart.filter((item) => item.pkg.id !== id));
  };

  return (
    <CartContext.Provider
      value={[cart, addItemToCart, removeItemFromCart, clearCart]}>
      {children}
    </CartContext.Provider>
  );
}

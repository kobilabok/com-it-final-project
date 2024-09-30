"use client"
import { createContext, useState, useContext, useEffect} from "react";

export const CartContext = createContext({});

export default function CartContextProvider({ children }){

    const [cart, setCart] = useState([]);

    // const addItemToCart = (item) => {
    //     setCart((prevCart) => {
    //       const itemIndex = prevCart.findIndex((cartItem) => cartItem.id === item.id);
    //       if (itemIndex > -1) {
    //         const updatedCart = [...prevCart];
    //         updatedCart[itemIndex].quantity += 1;
    //         return updatedCart;
    //       }
    //       return [...prevCart, { ...item, quantity: 1 }];
    //     });
    //   };

      const addItemToCart = (product) => {
        setCart([...cart, product]);
      };

      const clearCart = () => {
        setCart([]);
      };

      const removeItemFromCart = () => {
        // setCart(cart.filter(item => item.id !== id));
        setCart([]);
      };

      

    return <CartContext.Provider value={[cart, addItemToCart, removeItemFromCart, clearCart]}>{children}</CartContext.Provider>
}
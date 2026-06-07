import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);
const STORAGE_KEY = "fabfit_cart";

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    } catch (error) {
      console.warn("Unable to save cart", error);
    }
  }, [cart]);

  const addToCart = (product, quantity = 1) => {
    setCart((current) => {
      const existing = current.find((item) => item.id === product.id);
      if (existing) {
        return current.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...current, { ...product, quantity }];
    });
  };

  const updateQuantity = (productId, nextQuantity) => {
    setCart((current) =>
      current
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: Math.max(0, nextQuantity) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (productId) => {
    setCart((current) =>
      current.filter((item) => item.id !== productId)
    );
  };

  const clearCart = () => setCart([]);

  const summary = useMemo(() => {
    const subtotal = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const discount = Math.round(subtotal * 0.1);
    const shipping = subtotal > 0 ? 0 : 0;
    return {
      items: cart,
      subtotal,
      discount,
      shipping,
      total: subtotal - discount + shipping,
      count: cart.reduce((sum, item) => sum + item.quantity, 0),
    };
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        ...summary,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
}

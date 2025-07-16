import { createContext, useContext, useState, useEffect } from "react";

// Create the context
const CartContext = createContext();

// Cart Provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  // Sync cart to localStorage on change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Add product only once
  const addToCart = (product) => {
    const exists = cartItems.find((item) => item._id === product._id);

    if (exists) {
      alert("This product is already in your cart!");
      return;
    }
    const updatedCart = [...cartItems, { ...product, quantity: 1 }];
    setCartItems(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook to use cart context
export const useCart = () => useContext(CartContext);

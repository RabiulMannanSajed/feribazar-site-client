// import { createContext, useContext, useState, useEffect } from "react";

// // Create the context
// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState(() => {
//     const stored = localStorage.getItem("cart");
//     return stored ? JSON.parse(stored) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cartItems));
//   }, [cartItems]);

//   const addToCart = (product) => {
//     const exists = cartItems.find((item) => item._id === product._id);
//     if (exists) return;
//     setCartItems([...cartItems, { ...product, quantity: 1 }]);
//   };

//   const updateQuantity = (id, amount) => {
//     const updated = cartItems.map((item) =>
//       item._id === id
//         ? { ...item, quantity: Math.max(item.quantity + amount, 1) }
//         : item
//     );
//     setCartItems(updated);
//   };

//   const removeFromCart = (id) => {
//     const filtered = cartItems.filter((item) => item._id !== id);
//     setCartItems(filtered);
//   };

//   return (
//     <CartContext.Provider
//       value={{ cartItems, addToCart, updateQuantity, removeFromCart }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// // Hook to use cart context
// export const useCart = () => useContext(CartContext);
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  // Sync cart with localStorage on any change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Add to cart only once (if not already exists)
  const addToCart = (product) => {
    const exists = cartItems.find((item) => item._id === product._id);
    if (exists) return;
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
  };

  // Update quantity (used in Cart only)
  const updateQuantity = (id, amount) => {
    const updated = cartItems.map((item) =>
      item._id === id
        ? { ...item, quantity: Math.max(item.quantity + amount, 1) }
        : item
    );
    setCartItems(updated);
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    const filtered = cartItems.filter((item) => item._id !== id);
    setCartItems(filtered);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

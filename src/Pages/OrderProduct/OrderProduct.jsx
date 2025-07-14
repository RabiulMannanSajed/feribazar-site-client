import { useState } from "react";

const OrderProduct = () => {
  const [cartItems, setCartItems] = useState([]);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="flex flex-col h-[100vh]">
      {/* Cart Title */}
      <h2 className="text-2xl font-bold mb-4 border-b pb-2 px-4 pt-4">
        Your Cart
      </h2>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto px-4">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="flex items-center gap-4 mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-500">
                  {item.quantity} × ৳{item.price}
                </p>
                <p className="font-medium">৳{item.price * item.quantity}</p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Sticky Checkout Footer */}
      <div className="sticky bottom-0 bg-white pt-4 border-t px-4 pb-4">
        <div className="flex justify-between font-bold text-lg mb-4">
          <span>Total:</span>
          <span>৳{total}</span>
        </div>
        <button className="w-full bg-[#67B96E] text-white py-3 rounded-md shadow-md uppercase hover:bg-[#58a760] transition">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default OrderProduct;

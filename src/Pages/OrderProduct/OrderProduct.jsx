import { useState } from "react";

const OrderProduct = () => {
  // Dummy cart items — replace with your real cart state or props]
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-2xl font-bold mb-4 border-b pb-2">Your Cart</h2>

      <div className="flex-1 overflow-y-auto">
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

      <div className="sticky bottom-0 bg-white pt-4 border-t mt-4">
        <div className="flex justify-between font-bold text-lg mb-4 px-1">
          <span>Total:</span>
          <span>৳{}</span>
        </div>
        <button className="w-full bg-[#67B96E] text-white py-3 rounded-md shadow-md uppercase hover:bg-[#58a760] transition">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default OrderProduct;

import { NavLink } from "react-router-dom";
import { useCart } from "../../Utils/Provider/CartProvider";

const OrderProduct = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="flex flex-col h-[100vh]">
      <h2 className="text-2xl font-bold mb-4 border-b pb-2 px-4 pt-4">
        Your Cart
      </h2>

      <div className="flex-1 overflow-y-auto px-4">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item._id} className="flex items-center gap-4 mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-500">
                  ৳{item.price} × {item.quantity}
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item._id, -1)}
                    className="bg-gray-300 px-2 rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item._id, 1)}
                    className="bg-gray-300 px-2 rounded"
                  >
                    +
                  </button>
                </div>
                <div
                  onClick={() => removeFromCart(item._id)}
                  className="bg-red-600 mt-3 pt-1 pb-1 rounded text-white
                   text-xs font-semibold hover:underline cursor-pointer text-center"
                >
                  Remove
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="sticky bottom-0 bg-white pt-4 border-t px-4 pb-4">
        <div className="flex justify-between font-bold text-lg mb-4">
          <span>Total:</span>
          <span>৳{total}</span>
        </div>
        <NavLink to="/payment">
          <button className="w-full bg-[#67B96E] heebo-text text-white text-xl py-3 rounded-md shadow-md uppercase hover:bg-[#58a760] transition">
            Checkout
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default OrderProduct;

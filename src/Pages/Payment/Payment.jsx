import React, { useEffect, useState } from "react";
import { useCart } from "../../Utils/Provider/CartProvider";
import { useForm } from "react-hook-form";

const Payment = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const { cartItems } = useCart();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const onSubmit = (data) => {
    console.log("Order submitted:", {
      ...data,
      products: cartItems,
      total,
    });
    // Optionally: send to backend API
  };

  if (cartItems.length === 0) {
    return (
      <div
        className={` h-screen flex justify-center items-center transition-all duration-500  ${
          isScrolled ? "mt-5" : "mt-25"
        }`}
      >
        <h2 className="text-xl font-semibold text-gray-500">
          No product added
        </h2>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={` w-[90%] mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 transition-all duration-500  ${
        isScrolled ? "mt-5" : "mt-30"
      }`}
    >
      {/* Left: User Info */}
      <div className="space-y-5">
        <h2 className="text-2xl font-bold mb-4">Shipping Information</h2>

        <div>
          <input
            type="text"
            placeholder="Name"
            {...register("name", { required: "Name is required" })}
            className="w-full border px-4 py-2 rounded"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <input
            type="tel"
            placeholder="Phone"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{6,15}$/,
                message: "Enter a valid phone number",
              },
            })}
            className="w-full border px-4 py-2 rounded"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <textarea
            placeholder="Address"
            {...register("address", { required: "Address is required" })}
            className="w-full border px-4 py-2 rounded"
          />
          {errors.address && (
            <p className="text-red-500 text-sm mt-1">
              {errors.address.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-[#67B96E] text-white py-3 rounded-md shadow-md uppercase hover:bg-[#58a760] transition"
        >
          Place Order
        </button>
      </div>

      {/* Right: Product Summary */}
      <div className="space-y-5">
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
        <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
          {cartItems.map((item) => (
            <div key={item._id} className="border-b pb-2">
              <p className="font-semibold">{item.name}</p>
              <p className="text-gray-600 text-sm">Quantity: {item.quantity}</p>
              <p className="text-gray-700">
                Subtotal: {item.quantity * item.price} ৳
              </p>
            </div>
          ))}
        </div>
        <div className="text-xl font-bold text-right pt-4 border-t">
          Total: {total} ৳
        </div>
      </div>
    </form>
  );
};

export default Payment;

import { useEffect, useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../../../assets/feri_bazar-logo.png";
import OrderProduct from "../../OrderProduct/OrderProduct";
import { useCart } from "../../../Utils/Provider/CartProvider";

const MenuNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartItems } = useCart();
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed left-0 w-full z-50 bg-white transition-all duration-500 ${
        isScrolled ? "top-0" : "top-15"
      }`}
    >
      {/* Drawer for Side Navbar */}
      <div className="drawer">
        <input id="menu-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Main Navbar */}
          <div className="custom-container">
            <div className="flex w-full items-center mt-4">
              {/* Left: Hamburger Icon */}
              <div className="navbar-start">
                <label htmlFor="menu-drawer" className="cursor-pointer">
                  <RxHamburgerMenu
                    className={`text-[#2B425A] transition-all duration-500 ${
                      isScrolled ? "text-3xl" : "text-4xl"
                    }`}
                  />
                </label>
              </div>

              {/* Center: Logo */}
              <div className="navbar-center">
                <img
                  src={logo}
                  className={`transition-all duration-500 ${
                    isScrolled ? "w-[70px]" : "w-[100px]"
                  }`}
                  alt="Logo"
                />
              </div>

              {/* Right: Search + Cart + Profile */}
              <div className="navbar-end flex items-center gap-2">
                {/* Search */}
                <label className="input">
                  <svg
                    className="h-[1em] opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      fill="none"
                      stroke="currentColor"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.3-4.3"></path>
                    </g>
                  </svg>
                  <input type="search" required placeholder="Search" />
                </label>

                {/* Shopping Cart (opens drawer) */}
                <label
                  htmlFor="cart-drawer"
                  className="indicator ml-5 cursor-pointer"
                >
                  <HiOutlineShoppingBag
                    className={`text-[#2B425A] transition-all duration-500 ${
                      isScrolled ? "text-3xl" : "text-4xl"
                    }`}
                  />
                  <span className="badge badge-xs badge-primary indicator-item">
                    {cartCount}
                  </span>
                </label>

                {/* Profile Dropdown */}
                <div className="dropdown dropdown-end ml-5">
                  <div tabIndex={0} role="button">
                    <div className="rounded-full">
                      <FaCircleUser
                        className={`text-[#2B425A] transition-all duration-500 ${
                          isScrolled ? "text-3xl" : "text-4xl"
                        }`}
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                  >
                    <li>
                      <a>Settings</a>
                    </li>
                    <li>
                      <a>Logout</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Left Drawer Side Nav */}
        <div className="drawer-side z-50">
          <label htmlFor="menu-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-64 min-h-full bg-base-200 text-base-content">
            <li>
              <a>Homepage</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Cart Drawer (right side) */}
      <div className="drawer drawer-end z-50">
        <input id="cart-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-side">
          <label htmlFor="cart-drawer" className="drawer-overlay"></label>
          <div className="menu p-4 w-80 min-h-full bg-white text-base-content">
            <OrderProduct />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuNavbar;

import React, { useEffect, useState } from "react";
import Card from "../../../Utils/Card/Card";
import HomeBanner from "../HomeBanner/HomeBanner";
import Products from "../../Product/Products";
import DiscountProduct from "../../DiscountProduct/DiscountProduct";
const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`  transition-all duration-500  ${
        isScrolled ? "mt-5" : "mt-25"
      }`}
    >
      <HomeBanner />
      <Products />
      <DiscountProduct />
    </div>
  );
};

export default Home;

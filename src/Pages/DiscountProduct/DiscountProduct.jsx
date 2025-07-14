import { useEffect, useState } from "react";
import Card from "../../Utils/Card/Card"; // make sure this path is correct

const DiscountProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Filter only discounted products
  const discountedProducts = products.filter(
    (product) => product.isDiscount === true
  );

  return (
    <div className="w-[90%] mx-auto pb-10">
      <h1 className="text-xl md:text-2xl lg:text-3xl uppercase font-bold text-center mt-10 mb-10 heebo-text">
        Discounted Products
      </h1>
      {/* Grid view for medium and large screens */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7 hidden md:grid">
        {discountedProducts.map((product, index) => (
          <Card key={index} product={product} />
        ))}
      </div>

      {/* Horizontal slider for small screens */}
      <div className="flex md:hidden overflow-x-auto gap-4 px-1">
        {discountedProducts.map((product, index) => (
          <div key={index} className="min-w-[250px] flex-shrink-0">
            <Card product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscountProduct;

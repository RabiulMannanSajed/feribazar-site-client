import { useEffect, useState } from "react";
import Card from "../../Utils/Card/Card";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Filter to get only undiscounted products
  const undiscountedProducts = products.filter(
    (product) => !product.isDiscount
  );

  return (
    <div className="w-[90%] mx-auto mb-10">
      <h1 className="text-2xl uppercase font-bold text-center mt-10 mb-10 heebo-text">
        {" "}
        ALL Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7">
        {undiscountedProducts.map((product, index) => (
          <Card key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;

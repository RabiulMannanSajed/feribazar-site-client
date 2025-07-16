import Card from "../../Utils/Card/Card";
import useProduct from "../../hooks/useProduct";

const Products = () => {
  const [products] = useProduct();

  console.log(products);
  // Filter to get only undiscounted products
  const undiscountedProducts = products?.filter(
    (product) => product.isDiscount === false
  );
  return (
    <div className="w-[90%] mx-auto pb-10">
      <h1 className="text-xl md:text-2xl lg:text-3xl uppercase font-bold text-center mt-10 mb-10 heebo-text">
        ALL Products
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7 hidden md:grid">
        {undiscountedProducts.map((product, index) => (
          <Card key={index} product={product} />
        ))}
      </div>

      {/* Horizontal slider for small screens only */}
      <div className="flex md:hidden overflow-x-auto gap-4 px-1">
        {undiscountedProducts.map((product, index) => (
          <div key={index} className="min-w-[250px] flex-shrink-0">
            <Card product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

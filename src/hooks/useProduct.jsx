import { useQuery } from "@tanstack/react-query";

const useProduct = () => {
  const {
    isPending,
    data: products = [],
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(
        "http://localhost:5000/api/v1/feriBazar/products/get-all-product"
      );
      return res.json();
    },
  });
  return [products, refetch, isPending];
};

export default useProduct;

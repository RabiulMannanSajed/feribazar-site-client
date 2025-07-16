import { useQuery } from "@tanstack/react-query";

const useProductDetails = () => {
  const {
    isPending,
    data: productDetails = [],
    refetch,
  } = useQuery({
    queryKey: ["productDetails"],
    queryFn: async () => {
      const res = await fetch(
        "http://localhost:5000/api/v1/productsDetails/get-product-details"
      );
      return res.json();
    },
  });
  return [productDetails, refetch, isPending];
};

export default useProductDetails;

const Card = ({ product }) => {
  const { name, image, price, discountPrice, isDiscount, details } = product;

  return (
    <div className="card bg-base-100  border-1 border-[#89d690] shadow-md shadow-[#3d3f3e]">
      <figure className="px-5 pt-5">
        <img src={image} alt={name} className="rounded-xl h-[199px] " />
      </figure>
      <div className="p-5 heebo-text">
        <div className="flex justify-between">
          <p className="font-bold text-[#535252] text-xl">{name}</p>
        </div>
        {isDiscount && (
          <p className="line-through decoration-red-500 text-sm text-[#535252]">
            ৳{price}
          </p>
        )}
        <p className="font-semibold text-xl text-[#535252]">
          {isDiscount ? discountPrice : price} ৳
        </p>
        <div className="card-actions mt-5">
          <div
            className="bg-[#67B96E] text-2xl text-white w-full pt-4 pb-4 rounded-md text-center shadow-md shadow-[#3d3f3e] uppercase 
    transition transform duration-200 active:scale-95 cursor-pointer"
          >
            ADD TO CART
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

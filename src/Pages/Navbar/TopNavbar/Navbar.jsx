import { BsFacebook } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="bg-[#1f2937]">
      <div className="custom-container  flex justify-between items-center">
        <h2 className=" pt-5 pb-5 font-medium text-[#67B96E] text-md md:text-xl lg:text-2xl heebo-text">
          Purity is the first priority{" "}
        </h2>
        <div>
          <BsFacebook className="text-2xl text-[#67B96E] rounded-full hover:bg-white hover:text-[#67B96E] transition cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

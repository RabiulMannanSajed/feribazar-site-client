import { BsFacebook } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="bg-[#67B96E]">
      <div className="custom-container  flex justify-between items-center">
        <h2 className=" pt-5 pb-5 font-medium text-[#2B425A] text-md md:text-xl lg:text-2xl heebo-text">
          Purity is the first priority{" "}
        </h2>
        <div>
          <BsFacebook className="text-2xl text-[#2B425A] cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

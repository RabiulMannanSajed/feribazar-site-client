import { Outlet } from "react-router";
import Navbar from "../Pages/Navbar/TopNavbar/Navbar";
import MenuNavbar from "../Pages/Navbar/MenuNavbar/MenuNavbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <MenuNavbar />
      <Outlet />
    </div>
  );
};

export default Main;

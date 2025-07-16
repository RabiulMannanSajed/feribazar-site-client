import { Outlet } from "react-router";
import Navbar from "../Pages/Navbar/TopNavbar/Navbar";
import MenuNavbar from "../Pages/Navbar/MenuNavbar/MenuNavbar";
import Footer from "../Pages/Navbar/Footer/Footer";

const Main = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <MenuNavbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Main;

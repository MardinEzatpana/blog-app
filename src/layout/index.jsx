import { Outlet } from "react-router-dom";
import Navbar from "../components/common/navbar/Navbar";
import Footer from "../components/common/footer/Footer";

const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };
  export default Layout
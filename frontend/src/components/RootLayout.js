import { Outlet } from "react-router-dom";
import Header from "./Header";
import Subheader from "./Subheader";
import { Footer } from "./Footer";

const RootLayout = () => {
  return (
    <div className="text-white bg-gray-900 overflow-y-hidden scroll-m-0 scroll-smooth">
      <Header></Header>
      <Subheader />
      <Outlet />
      <Footer></Footer>
    </div>
  );
};
export default RootLayout;

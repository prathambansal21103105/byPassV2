import { Outlet } from "react-router-dom";
import Header from "./Header";
import Subheader from "./Subheader";
import { Footer } from "./Footer";

const RootLayout = () => {
  return (
    <div className="text-white bg-black-900 sscroll-smooth">
      <Header></Header>
      <Subheader />
      <div className="flex flex-col gap-10 ">
        <Outlet />
        <Footer className="sm:mt-[9600px]" />
      </div>
    </div>
  );
};
export default RootLayout;

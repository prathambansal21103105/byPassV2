import { Outlet } from "react-router-dom";
import Home from "./Home";

const HomeLayout = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-2 w-full h-screen">
      <Outlet />
      <Home />
    </section>
  );
};
export default HomeLayout;

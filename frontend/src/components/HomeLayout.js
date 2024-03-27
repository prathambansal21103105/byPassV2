import { Outlet } from "react-router-dom";
import Home from "./Home";

const HomeLayout = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-2 w-full h-screen">
      <div className="flex flex-col">
        <p className="text-[2.5rem] font-bold  text-gray-50 mx-auto mt-3">
          "Pooling Rides, Sharing Smiles"{" "}
          <span className="text-gray-50 text-[3rem] md:text-[4rem] "></span>
        </p>
        <Outlet />
      </div>
      <Home />
    </section>
  );
};
export default HomeLayout;

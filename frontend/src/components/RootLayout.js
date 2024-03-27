import { Outlet } from "react-router-dom";
import Header from "./Header";

const RootLayout = () => {
  return (
    <div className="text-white">
      <Header></Header>
      <Outlet />
    </div>
  );
};
export default RootLayout;

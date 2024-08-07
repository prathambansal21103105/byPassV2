import { Outlet, useLoaderData, useLocation } from "react-router-dom";
import Header from "./Header";
import Subheader from "./Subheader";
import { Footer } from "./Footer";
import { useDispatch } from "react-redux";
import { userActions } from "../store/user";
import { loginActions } from "../store/login";
// import { useEffect } from "react";
// import { retrieveSession } from "../App";
// import { useSelector } from "react-redux";

const RootLayout = () => {
  const dispatch = useDispatch();
  const data = useLoaderData();
  const location = useLocation();
  console.log(data);
  console.log(location);
  if(data && data._id!=="" && location.pathname!=="/login"){
    console.log("ran again")
    console.log(data)
    dispatch(userActions.setUser(data));
    dispatch(loginActions.setLogin({login:true}));
  }
  return (
    <div className="text-white bg-bypassColor scroll-smooth">
      <Header></Header>
      <Subheader />
      <div className="flex flex-col gap-10">
        <Outlet />
        <Footer className="sm:mt-[9600px]" />
      </div>
    </div>
  );
};
export default RootLayout;

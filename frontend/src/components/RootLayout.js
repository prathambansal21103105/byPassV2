import { Outlet, useLoaderData, useLocation } from "react-router-dom";
import Header from "./Header";
import Subheader from "./Subheader";
import { Footer } from "./Footer";
import { useEffect } from "react";
import { retrieveSession } from "../App";
import { useDispatch } from "react-redux";
import { userActions } from "../store/user";
import { loginActions } from "../store/login";
import { useSelector } from "react-redux";

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
  const login = useSelector((state)=>{
    return state.login.login;
  })
  const user = useSelector((state)=>{
    return state.user;
  })
  // useEffect(()=>{
  //   const fetchSession = async()=>{
  //     const user = await retrieveSession();
  //     if(user){
  //       dispatch(userActions.setUser(user));
  //       dispatch(loginActions.setLogin({login:true}));
  //     }
  //   }
  //   // console.log("useEffect call");
  //   if(!login){
  //     fetchSession();
  //   }
  // },[login,user.id]);
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

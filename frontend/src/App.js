import RootLayout from "./components/RootLayout";
import HomeLayout from "./components/HomeLayout";
import Help from "./components/Help";
import Login from "./components/Login";
import Register from "./components/Register";
import UserLayout from "./components/UserLayout";
import Browse from "./components/Browse";
import Profile from "./components/Profile";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PublishRide from "./components/PublishRide";
import HomePage from "./components/HomePage";
import { useState } from "react";
import axios from "axios";
import { userInitialState } from "./store/user";
import Mail from "./components/inbox";
import { useDispatch, useSelector } from "react-redux";
import { notificationActions } from "./store/notifications";

export const destroySession = async()=>{
  try{
    const res = await axios.get("http://localhost:4000/destroy", {
      withCredentials: true, // Include credentials like cookies if needed
    });
    return res.message;
  }
  catch(e){
    console.log("error caught");
  }
  return "error";
}

const App = () => {
  const dispatch = useDispatch();
  const [modal,setModal]=useState(false);
  const user = useSelector((state)=>{
    return state.user;
  })
  const [text,setText]=useState("");
  const [loading,setLoading]=useState("");
  // const navigator = useNavigate();
  const modalHandler=(text)=>{
    // console.log("YESYES");
    // console.log(text);
    setText(text);
    setModal(true);
    // navigator("/user/browse");
    setTimeout(()=>{setModal(false)},3000);
  }
  const retrieveSession = async()=>{
    console.log("loader call");

    try{
      const res = await axios.get("http://localhost:4000/getUser", {
        withCredentials: true, // Include credentials like cookies if needed
      });
      const user = res.data.user;
      console.log("retrieved " + user);
      console.log(user);
      return user;
    }catch(e){
      console.log("error caught");
      return userInitialState;
    }
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout flag={loading} handler={setLoading}/>,
      loader:retrieveSession,
      children: [
        {
          path: "",
          element: <HomeLayout modal={modal} text={text}/>,
          children: [
            { path: "", element: <HomePage /> },
            { path: "login", element: <Login modalHandler={modalHandler}/> },
            { path: "register", element: <Register modalHandler={modalHandler}/> },
            { path: "publish", element: <PublishRide modalHandler={modalHandler}/> },
          ],
        },
        {
          path: "user/",
          element: <UserLayout />,
          children: [
            { path: "help", element: <Help/> },
            { path: "browse", element: <Browse /> },
            { path: "profile", element: <Profile /> },
            { path: "inbox", element: <Mail/> }
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;

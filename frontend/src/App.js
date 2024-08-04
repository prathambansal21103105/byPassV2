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

export const retrieveSession = async()=>{
  // setTimeout(async()=>{
    console.log("loader call");
    const res = await axios.get("http://localhost:4000/getUser", {
      withCredentials: true, // Include credentials like cookies if needed
    });
    const user = res.data.user;
    console.log("retrieved " + user);
    console.log(user);
    return user;
  // },3000);
  // return userInitialState;
}

export const destroySession = async()=>{
  const res = await axios.get("http://localhost:4000/destroy", {
    withCredentials: true, // Include credentials like cookies if needed
  });
}

const App = () => {
  const [modal,setModal]=useState(false);
  const [text,setText]=useState("");
  // const navigator = useNavigate();
  const modalHandler=(text)=>{
    // console.log("YESYES");
    // console.log(text);
    setText(text);
    setModal(true);
    // navigator("/user/browse");
    setTimeout(()=>{setModal(false)},3000);
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
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
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;

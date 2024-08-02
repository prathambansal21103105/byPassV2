import RootLayout from "./components/RootLayout";
import HomeLayout from "./components/HomeLayout";
import Filler from "./components/Filler";
import Help from "./components/Help";
import Login from "./components/Login";
import Register from "./components/Register";
import UserLayout from "./components/UserLayout";
import Browse from "./components/Browse";
import Profile from "./components/Profile";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import PublishRide from "./components/PublishRide";
import HomePage from "./components/HomePage";
import { useState } from "react";

const App = () => {
  const [modal,setModal]=useState(false);
  const [text,setText]=useState("");
  // const navigator = useNavigate();
  const modalHandler=(text)=>{
    console.log("YESYES");
    console.log(text);
    setText(text);
    setModal(true);
    // navigator("/user/browse");
    setTimeout(()=>{setModal(false)},3000);
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
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

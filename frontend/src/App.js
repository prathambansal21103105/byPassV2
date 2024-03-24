import RootLayout from "./components/RootLayout";
import HomeLayout from "./components/HomeLayout";
import Filler from "./components/Filler";
import Login from "./components/Login";
import Register from "./components/Resgister";
import UserLayout from "./components/UserLayout";
import Browse from "./components/Browse";
import Profile from "./components/Profile";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "",
          element: <HomeLayout />,
          children: [
            { path: "", element: <Filler /> },
            { path: "login", element: <Login /> },
            { path: "register", element: <Register /> },
          ],
        },
        {
          path: "user/",
          element: <UserLayout />,
          children: [
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

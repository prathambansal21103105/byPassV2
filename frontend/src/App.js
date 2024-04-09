import RootLayout from "./components/RootLayout";
import HomeLayout from "./components/HomeLayout";
import Filler from "./components/Filler";
import Login from "./components/Login";
import Register from "./components/Resgister";
import UserLayout from "./components/UserLayout";
import Browse from "./components/Browse";
import Profile from "./components/Profile";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import PublishRide from "./components/PublishRide";
import HomePage from "./components/HomePage";

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
            { path: "", element: <HomePage /> },
            { path: "login", element: <Login /> },
            { path: "register", element: <Register /> },
            { path: "search", element: <SearchPage /> },
            { path: "help", element: <SearchPage /> },
            { path: "publish", element: <PublishRide /> },
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

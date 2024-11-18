import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Brands from "../pages/Brands";
import Auth from "../pages/Auth";
import Login from "../components/Login";
import Register from "../components/Register";
import PrivateRoute from "../private route/PrivateRoute";
import UserProfile from "../pages/UserProfile";

const routes = createBrowserRouter([
   {
      path: "/",
      element: <MainLayout />,
      children: [
         {
            path: "/",
            element: <Home />,
         },
         {
            path: "/brands",
            element: <Brands />,
         },
         {
            path: "/profile",
            element: (
               <PrivateRoute>
                  <UserProfile />
               </PrivateRoute>
            ),
         },
         {
            path: "/auth",
            element: <Auth />,
            children: [
               {
                  path: "/auth/login",
                  element: <Login />,
               },
               {
                  path: "/auth/register",
                  element: <Register />,
               },
            ],
         },
      ],
   },
]);

export default routes;

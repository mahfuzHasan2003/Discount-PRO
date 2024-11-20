import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Brands from "../pages/Brands";
import Auth from "../pages/Auth";
import Login from "../components/Login";
import Register from "../components/Register";
import PrivateRoute from "../private route/PrivateRoute";
import UserProfile from "../pages/UserProfile";
import BrandDetails from "../pages/BrandDetails";
import UpdateProfile from "../pages/updateProfile";
import PasswordReset from "../pages/PasswordReset";
import ErrorPage from "../pages/ErrorPage";

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
      ],
   },
   {
      path: "/brand/:id",
      element: (
         <PrivateRoute>
            <BrandDetails />
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
   {
      path: "/profile",
      element: (
         <PrivateRoute>
            <UserProfile />
         </PrivateRoute>
      ),
   },
   {
      path: "/update-profile",
      element: (
         <PrivateRoute>
            <UpdateProfile />
         </PrivateRoute>
      ),
   },
   {
      path: "/reset-password",
      element: <PasswordReset />,
   },
   {
      path: "*",
      element: <ErrorPage />,
   },
]);

export default routes;

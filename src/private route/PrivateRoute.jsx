import { useContext } from "react";
import { AuthContext } from "../provider/AuthDataProvider";
import { Navigate, useLocation } from "react-router-dom";
import { RingLoader } from "react-spinners/";

const PrivateRoute = ({ children }) => {
   const location = useLocation();

   const { user, loading } = useContext(AuthContext);
   if (loading)
      return (
         <RingLoader size={100} speedMultiplier={1} className='mx-auto mt-20' />
      );
   return user ? (
      children
   ) : (
      <Navigate to='/auth/login' state={location.pathname} />
   );
};

export default PrivateRoute;

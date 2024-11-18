import { useContext } from "react";
import { AuthContext } from "../provider/AuthDataProvider";
import { Navigate } from "react-router-dom";
import { RingLoader } from "react-spinners/";

const PrivateRoute = ({ children }) => {
   const { user, loading } = useContext(AuthContext);
   if (loading)
      return (
         <RingLoader size={100} speedMultiplier={1} className='mx-auto mt-20' />
      );
   return user ? children : <Navigate to='/auth/login' />;
};

export default PrivateRoute;

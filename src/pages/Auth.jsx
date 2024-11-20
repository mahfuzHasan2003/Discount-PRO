import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Auth = () => {
   return (
      <div className=''>
         <NavBar />
         <Outlet />
      </div>
   );
};

export default Auth;

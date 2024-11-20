import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Auth = () => {
   return (
      <div className='w-11/12 max-w-7xl mx-auto'>
         <NavBar />
         <Outlet />
      </div>
   );
};

export default Auth;

import { Outlet } from "react-router-dom";

const Auth = () => {
   return (
      <div className='w-11/12 max-w-7xl mx-auto'>
         <Outlet />
      </div>
   );
};

export default Auth;

import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const MainLayout = () => {
   return (
      <div className='font-Montserrat'>
         <NavBar />
         <Outlet />
      </div>
   );
};

export default MainLayout;

import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Toaster } from "react-hot-toast";
import Footer from "../components/Footer";

const MainLayout = () => {
   return (
      <div className='font-Montserrat'>
         <NavBar />
         <Outlet />
         <Footer />
         <Toaster position='bottom-center' reverseOrder={false} />
      </div>
   );
};

export default MainLayout;

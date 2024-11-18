import { useState } from "react";
import { FaBars, FaHome, FaTags, FaUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import "./NavBar.css";
import { IoClose } from "react-icons/io5";

const NavBar = () => {
   const [isOpen, setIsOpen] = useState(false);
   const toggleDrawer = () => {
      setIsOpen((prevState) => !prevState);
   };
   return (
      <nav className='flex items-center justify-between py-4 border-b w-11/12 max-w-7xl mx-auto'>
         <div className='font-bold text-2xl'>
            <NavLink to='/'>Discount PRO</NavLink>
         </div>

         <div
            className='hidden md:flex space-x-4 flex-grow justify-center'
            id='nav-links'>
            <NavLink to='/' className='flex items-center space-x-1'>
               <FaHome /> <span>Home</span>
            </NavLink>
            <NavLink to='/brands' className='flex items-center space-x-1'>
               <FaTags /> <span>Brands</span>
            </NavLink>
            <NavLink to='/profile' className='flex items-center space-x-1'>
               <FaUser /> <span>My Profile</span>
            </NavLink>
         </div>

         <div className='hidden md:block'>
            <Link to='/auth/login'>
               <button className='bg-brown text-white px-4 py-2 rounded-md hover:bg-brown-dark'>
                  Login
               </button>
            </Link>
         </div>

         {/* --------------- for Mobile Devices --------------- */}
         <div className='md:hidden flex-grow place-items-end'>
            <FaBars onClick={toggleDrawer} size={25} />
         </div>

         <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction='right'
            size='100vw'
            style={{ height: "100vh" }}
            className='p-4 bg-white shadow-lg'>
            <div className='flex flex-col h-full'>
               <header className='flex justify-between items-center border-b pb-5'>
                  <h2 className='text-2xl font-bold'>Discount PRO</h2>
                  <button
                     onClick={toggleDrawer}
                     className='text-red-500 text-lg'>
                     <IoClose size={40} />
                  </button>
               </header>

               <main className='mt-8 flex flex-col flex-grow space-y-4'>
                  <NavLink
                     to='/'
                     onClick={toggleDrawer}
                     className='flex items-center gap-2 space-x-1 text-xl'>
                     <FaHome /> <span>Home</span>
                  </NavLink>
                  <NavLink
                     to='/brands'
                     onClick={toggleDrawer}
                     className='flex items-center gap-2 space-x-1 text-xl'>
                     <FaTags /> <span>Brands</span>
                  </NavLink>
                  <NavLink
                     to='/profile'
                     onClick={toggleDrawer}
                     className='flex items-center gap-2 space-x-1 text-xl'>
                     <FaUser /> <span>My Profile</span>
                  </NavLink>
               </main>
            </div>
         </Drawer>
      </nav>
   );
};

export default NavBar;

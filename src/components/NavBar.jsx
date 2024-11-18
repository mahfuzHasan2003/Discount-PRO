import { useContext, useState } from "react";
import { FaBars, FaHome, FaTags, FaUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import "./NavBar.css";
import { IoClose } from "react-icons/io5";
import { AuthContext } from "../provider/AuthDataProvider";

const NavBar = () => {
   const [isOpen, setIsOpen] = useState(false);
   const toggleDrawer = () => {
      setIsOpen((prevState) => !prevState);
   };
   const { user } = useContext(AuthContext);
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
            {user ? (
               <NavLink to='/profile' className='flex items-center space-x-1'>
                  <FaUser /> <span>My Profile</span>
               </NavLink>
            ) : null}
         </div>

         <div className='hidden md:block'>
            {user ? (
               <div className='flex items-center gap-3'>
                  <p className='hidden lg:block text-sm'>{user.email}</p>
                  <Link to='/profile'>
                     <img
                        src={user.photoURL}
                        alt='profile photo'
                        className='w-12 aspect-square object-cover rounded-full'
                     />
                  </Link>
               </div>
            ) : (
               <div className='space-x-3'>
                  <Link to='/auth/login'>
                     <button className='bg-brown text-white px-4 py-2 rounded-md hover:bg-brown-dark'>
                        Login
                     </button>
                  </Link>
                  <Link to='/auth/register'>
                     <button className='border border-brown hover:border-brown-dark text-brown hover:text-brown-dark font-semibold px-4 py-2 rounded-md'>
                        Register
                     </button>
                  </Link>
               </div>
            )}
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
               <header className='flex justify-between items-center pb-5'>
                  <h2 className='text-2xl font-bold'>Discount PRO</h2>
                  <button
                     onClick={toggleDrawer}
                     className='text-red-500 text-lg'>
                     <IoClose size={40} />
                  </button>
               </header>

               <main className='mt-8 space-y-10'>
                  {user ? (
                     <h3 className='border-y py-3 font-semibold text-xl text-center'>
                        {user.displayName}
                     </h3>
                  ) : (
                     <div className='text-center space-x-3'>
                        <Link to='/auth/login' onClick={toggleDrawer}>
                           <button className='bg-brown text-white px-4 py-2 font-semibold rounded-md hover:bg-brown-dark'>
                              Login
                           </button>
                        </Link>
                        <Link to='/auth/register' onClick={toggleDrawer}>
                           <button className='border border-brown  text-brown font-semibold px-4 py-2 rounded-md'>
                              Register
                           </button>
                        </Link>
                     </div>
                  )}

                  <div className='space-y-3'>
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

                     {user ? (
                        <NavLink
                           to='/profile'
                           onClick={toggleDrawer}
                           className='flex items-center gap-2 space-x-1 text-xl'>
                           <FaUser /> <span>My Profile</span>
                        </NavLink>
                     ) : null}
                  </div>
               </main>
            </div>
         </Drawer>
      </nav>
   );
};

export default NavBar;

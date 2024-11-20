import { useContext } from "react";
import { AuthContext } from "../provider/AuthDataProvider";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Helmet } from "react-helmet";

const UserProfile = () => {
   const navigate = useNavigate();
   const { user, logOutUser } = useContext(AuthContext);
   const { displayName, email, photoURL } = user;

   const handleLogOut = () => {
      logOutUser().then(() => navigate("/"));
   };
   return (
      <>
         <Helmet>
            <title>Discount Pro | Profile</title>
         </Helmet>
         <NavBar />
         <div className='w-11/12 max-w-7xl mx-auto mt-5'>
            <div className='text-right mb-5 animate__animated animate__fadeIn'>
               <h2 className='text-xl'>
                  Welcome <span className='font-bold'> {displayName}</span>!
               </h2>
               <p className='font-Playwrite text-sm'>
                  We're glad to have you here!
               </p>
            </div>
            <div className='rounded-sm'>
               <div className='relative'>
                  <img
                     src='https://i.pinimg.com/1200x/20/d0/ac/20d0ac918bc379f1c49f27f8b27ace44.jpg'
                     alt='Cover Photo'
                     className='h-48 md:h-72 w-full object-cover rounded-t-md'
                  />
                  <img
                     src={photoURL}
                     alt='User Photo'
                     className='w-44 md:w-60 aspect-square object-cover rounded-full border-4 border-gray-100 absolute -bottom-[5.5rem] md:-bottom-[7.5rem] left-1/2 -translate-x-1/2'
                  />
               </div>
               <div className='bg-gray-100 p-2 pb-5 md:p-5 pt-28 md:pt-36 rounded-b-md'>
                  <div className='flex flex-col md:flex-row gap-5 md:items-end md:justify-between'>
                     <div className='w-full'>
                        <h4 className='text-lg font-semibold mb-3'>
                           Profile Information
                        </h4>
                        <div className='p-2 md:p-5 bg-white border border-gray-400 rounded-sm w-full max-w-xl space-y-3'>
                           <div>
                              <h6 className='font-semibold'>Name</h6>
                              <p className='text-sm md:text-base'>
                                 {displayName}
                              </p>
                           </div>
                           <div>
                              <h6 className='font-semibold'>Email</h6>
                              <p className='text-sm md:text-base'>{email}</p>
                           </div>
                        </div>
                     </div>
                     <div className='min-w-max space-x-5'>
                        <Link to='/update-profile'>
                           <button className='bg-green-500 text-white px-4 py-2 rounded-sm font-semibold'>
                              Update Profile
                           </button>
                        </Link>
                        <button
                           className='bg-yellow-500 text-white px-4 py-2 rounded-sm font-semibold'
                           onClick={handleLogOut}>
                           Log Out
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default UserProfile;

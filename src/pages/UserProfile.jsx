import { useContext } from "react";
import { AuthContext } from "../provider/AuthDataProvider";

const UserProfile = () => {
   const { user } = useContext(AuthContext);
   const { displayName, email, photoURL } = user;
   return (
      <div className='w-11/12 max-w-7xl mx-auto mt-10'>
         <div className='text-right mb-5'>
            <h2 className='text-xl'>
               Welcome <span className='font-bold'> {displayName}</span>!
            </h2>
            <p>We're glad to have you here!</p>
         </div>
         <div className='bg-gray-600 rounded-sm'>
            <div className='relative mb-20'>
               <img
                  src='https://i.pinimg.com/1200x/20/d0/ac/20d0ac918bc379f1c49f27f8b27ace44.jpg'
                  alt='Cover Photo'
                  className='h-48 md:h-72 w-full object-cover'
               />
               <img
                  src={photoURL}
                  alt='User Photo'
                  className='w-44 md:w-60 aspect-square object-cover rounded-full border-4 border-gray-100 absolute -bottom-[5.5rem] md:-bottom-[7.5rem] left-1/2 -translate-x-1/2'
               />
            </div>
         </div>
         {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem commodi blanditiis odit a deleniti maxime! Illo
            minima adipisci sequi aperiam, veritatis quam sed nihil sint magnam
            animi perspiciatis libero eveniet!
         </p> */}
      </div>
   );
};

export default UserProfile;

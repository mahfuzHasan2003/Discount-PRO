import { useContext, useState } from "react";
import NavBar from "../components/NavBar";
import { AuthContext } from "../provider/AuthDataProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
   const navigate = useNavigate();
   const { isValidPhotoURL, isValidName, updateUserProfile } =
      useContext(AuthContext);
   const [error, setError] = useState("");
   let obj = {};
   const handleUpdate = (e) => {
      e.preventDefault();
      const displayName = e.target.displayName.value || undefined;
      const photoURL = e.target.photoURL.value || undefined;
      if (displayName && isValidName(displayName)) {
         obj = { ...obj, displayName };
         setError("");
      }
      if (displayName && !isValidName(displayName)) {
         setError("Provide valid name");
         return;
      }
      if (photoURL && isValidPhotoURL(photoURL)) {
         obj = { ...obj, photoURL };
         setError("");
      }
      if (photoURL && !isValidPhotoURL(photoURL)) {
         setError("Provide valid photo URL");
         return;
      }
      e.target.reset();
      if (Object.keys(obj).length > 0) {
         updateUserProfile(obj)
            .then(() => {
               toast.success("Successfully updated profile");
               navigate("/profile");
            })
            .catch(() => toast.error("Something went wrong"));
      }
   };
   return (
      <div>
         <NavBar />
         <div className='w-11/12 max-w-7xl mx-auto mt-20 bg-gray-50 space-y-3'>
            <div className='max-w-xl px-5 py-10 md:px-10 md:py-16'>
               <h2 className='text-2xl md:text-3xl font-bold mb-10 rounded-sm'>
                  Update Profile
               </h2>
               {error ? (
                  <p className='mb-3 text-red-700 text-sm animate__animated animate__headShake'>
                     {error}
                  </p>
               ) : null}
               <form className='space-y-3' onSubmit={handleUpdate}>
                  <input
                     type='text'
                     name='displayName'
                     placeholder='Full Name'
                     className='bg-transparent border-b border-gray-800 w-full py-2 outline-none'
                  />
                  <input
                     type='text'
                     name='photoURL'
                     placeholder='photo URL'
                     className='bg-transparent border-b border-gray-800 w-full py-2 outline-none'
                  />
                  <input
                     type='submit'
                     name='submit'
                     value='Update'
                     className='bg-gray-700 font-semibold text-white py-2 px-6 rounded-sm cursor-pointer'
                  />
               </form>
            </div>
         </div>
      </div>
   );
};

export default UpdateProfile;

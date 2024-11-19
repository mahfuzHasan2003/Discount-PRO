import { Divider } from "@mui/material";
import "./Divider.css";
import googleLogo from "../assets/google.png";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthDataProvider";

const Register = () => {
   const { registerWithEmail, signInWithGoogle, updateUserProfile } =
      useContext(AuthContext);
   const navigate = useNavigate();
   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
   const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
   const isValidEmail = (email) => emailRegex.test(email);
   const isValidPassword = (password) => passwordRegex.test(password);

   const [error, setError] = useState(null);

   const handleRegister = (e) => {
      e.preventDefault();
      setError(null);
      const name = e.target.name.value;
      const email = e.target.email.value;
      const photoURL = e.target.photoURL.value;
      const password = e.target.password.value;
      const confirmPassword = e.target.confirmPassword.value;
      if (!isValidEmail(email)) {
         setError("Please enter a valid email");
         return;
      }
      if (password !== confirmPassword) {
         setError("Password do not match");
         return;
      }
      if (!isValidPassword(password)) {
         setError(
            "password must be have at least one upercase character, one lowercase character, one special character, one digit and length 6"
         );
         return;
      }
      registerWithEmail(email, password)
         .then(() => {
            e.target.reset();
            updateUserProfile({ displayName: name, photoURL: photoURL })
               .then(() => navigate("/"))
               .catch((error) => setError(error.code));
         })
         .catch((error) => setError(error.code));
   };
   const handleGoogleSignIn = () => {
      signInWithGoogle()
         .then(() => navigate("/"))
         .catch((error) => setError(error.code));
   };

   return (
      <div className='w-11/12 max-w-xl mx-auto mt-20 border shadow-sm px-5 py-10 md:px-10 md:py-16 bg-gray-50 space-y-3'>
         <h2 className='text-2xl md:text-3xl font-bold text-center mb-10 rounded-sm'>
            Register
         </h2>
         <form className='space-y-3' onSubmit={handleRegister}>
            <input
               type='text'
               name='name'
               placeholder='Name'
               className='bg-transparent placeholder-inherit border border-gray-800 w-full p-2 rounded-sm outline-brown'
            />
            <input
               type='text'
               name='email'
               placeholder='Email'
               className='bg-transparent placeholder-inherit border border-gray-800 w-full p-2 rounded-sm outline-brown'
            />
            <input
               type='text'
               name='photoURL'
               placeholder='Photo-URL'
               className='bg-transparent placeholder-inherit border border-gray-800 w-full p-2 rounded-sm outline-brown'
            />
            <input
               type='password'
               name='password'
               placeholder='Password'
               className='bg-transparent placeholder-inherit border border-gray-800 w-full p-2 rounded-sm outline-brown'
            />
            <input
               type='password'
               name='confirmPassword'
               placeholder='Confirm Password'
               className='bg-transparent placeholder-inherit border border-gray-800 w-full p-2 rounded-sm outline-brown'
            />
            <input
               type='submit'
               name='submit'
               value='Register'
               className='placeholder-inherit bg-brown font-bold text-white w-full p-2 rounded-sm cursor-pointer'
            />
            {error && (
               <p className='text-red-800 text-center text-sm animate__animated animate__headShake animate__fast'>
                  {error}
               </p>
            )}
            <p className='text-center'>
               Already have an account?
               <Link
                  to='/auth/login'
                  className='text-blue-700 underline font-medium ml-1'>
                  Login
               </Link>
            </p>
         </form>
         <Divider> OR </Divider>
         <div>
            <button
               className='flex gap-2 items-center justify-center w-full border border-brown p-2 rounded-sm'
               onClick={handleGoogleSignIn}>
               <img src={googleLogo} alt='Google Logo' className='w-6' />
               <span className='font-medium'>Continue with Google</span>
            </button>
         </div>
      </div>
   );
};

export default Register;

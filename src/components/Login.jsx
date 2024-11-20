import { Divider } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import googleLogo from "../assets/google.png";
import "./Divider.css";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../provider/AuthDataProvider";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const Login = () => {
   const [error, setError] = useState(null);
   const {
      isValidEmail,
      signInWithEmail,
      signInWithGoogle,
      setEmailForForgotPassword,
   } = useContext(AuthContext);
   const { state } = useLocation();
   const emailRef = useRef();
   const [showPass, setShowPass] = useState(false);

   const userDestination = state || "/";
   const navigate = useNavigate();

   const handleLogin = (e) => {
      e.preventDefault();
      setError(null);
      const email = e.target.email.value;
      const password = e.target.password.value;
      if (!isValidEmail) {
         setError("please enter a valid email");
         return;
      }
      if (!password) {
         setError("please enter a valid password");
         return;
      }
      signInWithEmail(email, password)
         .then(() => {
            e.target.reset();
            navigate(userDestination);
         })
         .catch((error) => setError(error.code));
   };
   const handleGoogleSignIn = () => {
      signInWithGoogle()
         .then(() => navigate(userDestination))
         .catch((error) => setError(error.code));
   };
   return (
      <div className='w-11/12 max-w-xl mx-auto mt-20 border shadow-sm px-5 py-10 md:px-10 md:py-16 bg-gray-50 space-y-3'>
         <h2 className='text-2xl md:text-3xl font-bold text-center mb-10 rounded-sm'>
            Login
         </h2>
         <form className='space-y-3 relative' onSubmit={handleLogin}>
            <input
               type='email'
               name='email'
               placeholder='Email'
               className='bg-transparent placeholder-inherit border border-gray-800 w-full p-2 rounded-sm outline-brown'
               ref={emailRef}
            />
            <div className='relative'>
               <input
                  type={showPass ? "text" : "password"}
                  name='password'
                  placeholder='Password'
                  className='bg-transparent placeholder-inherit border border-gray-800 w-full p-2 rounded-sm outline-brown'
               />
               {showPass ? (
                  <IoMdEye
                     className='absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer'
                     onClick={() => setShowPass((prev) => !prev)}
                  />
               ) : (
                  <IoMdEyeOff
                     className='absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer'
                     onClick={() => setShowPass((prev) => !prev)}
                  />
               )}
            </div>
            <p className='text-right text-blue-700 underline font-medium'>
               <Link
                  to='/reset-password'
                  onClick={() =>
                     setEmailForForgotPassword(emailRef.current.value)
                  }>
                  forgot password?
               </Link>
            </p>
            <input
               type='submit'
               name='submit'
               value='Login'
               className='placeholder-inherit bg-brown font-bold text-white w-full p-2 rounded-sm cursor-pointer'
            />
            {error && (
               <p className='text-red-800 text-center text-sm animate__animated animate__headShake animate__fast'>
                  {error}
               </p>
            )}
            <p className='text-center'>
               Don't have an account?
               <Link
                  to='/auth/register'
                  className='text-blue-700 underline font-medium ml-1'>
                  Register
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

export default Login;

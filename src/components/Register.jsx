import { Divider } from "@mui/material";
import "./Divider.css";
import googleLogo from "../assets/google.png";
import { Link } from "react-router-dom";

const Register = () => {
   return (
      <div className='w-11/12 max-w-xl mx-auto mt-20 border shadow-sm px-5 py-10 md:px-10 md:py-16 bg-gray-50 space-y-3'>
         <h2 className='text-2xl md:text-3xl font-bold text-center mb-10 rounded-sm'>
            Register
         </h2>
         <form className='space-y-3'>
            <input
               type='text'
               name='name'
               placeholder='Name'
               className='bg-transparent placeholder-inherit border border-gray-800 w-full p-2 rounded-sm outline-brown'
            />
            <input
               type='email'
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
            <p className='text-center'>
               Already have an account?
               <Link
                  to='/auth/register'
                  className='text-blue-700 underline font-medium ml-1'>
                  Login
               </Link>
            </p>
         </form>
         <Divider> OR </Divider>
         <div>
            <button className='flex gap-2 items-center justify-center w-full border border-brown p-2 rounded-sm'>
               <img src={googleLogo} alt='Google Logo' className='w-6' />
               <span className='font-medium'>Continue with Google</span>
            </button>
         </div>
      </div>
   );
};

export default Register;

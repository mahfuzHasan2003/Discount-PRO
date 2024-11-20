import { MdError } from "react-icons/md";
import { Link } from "react-router-dom";

const ErrorPage = () => {
   return (
      <div className='h-dvh grid place-items-center bg-orange-50'>
         <div className='text-center space-y-1 md:space-y-3 animate__animated animate__zoomIn'>
            <h1 className='font-black text-5xl md:text-7xl flex items-center gap-1 justify-center text-gray-800'>
               4 <MdError className='text-red-700' />
               <span className='scale-x-[-1]'>4</span>
            </h1>
            <h3 className='text-xl font-semibold'>Oops! You're lost.</h3>
            <p>The page you're looking for was not found.</p>
            <br />
            <hr className='border-t border-gray-400' />
            <br />
            <div className='inline-flex gap-2'>
               <button>
                  <Link
                     to={-1}
                     className='px-5 py-3 bg-gray-800 text-white font-semibold inline-block rounded-full'>
                     Go Back
                  </Link>
               </button>
               <button>
                  <Link
                     to='/'
                     className='px-5 py-3 bg-gray-800 text-white font-semibold inline-block rounded-full'>
                     Back to Home
                  </Link>
               </button>
            </div>
         </div>
      </div>
   );
};

export default ErrorPage;

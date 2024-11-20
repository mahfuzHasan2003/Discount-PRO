import { useContext, useRef } from "react";
import NavBar from "../components/NavBar";
import { AuthContext } from "../provider/AuthDataProvider";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const PasswordReset = () => {
   const {
      user,
      emailForForgotPassword,
      resetPassword,
      logOutUser,
      isValidEmail,
   } = useContext(AuthContext);
   const navigate = useNavigate();
   const emailRef = useRef();

   const handleResetPassword = (e) => {
      e.preventDefault();
      const email = emailForForgotPassword || emailRef.current.value;
      if (!email) return;
      if (!isValidEmail) return;
      resetPassword(email)
         .then(() =>
            console.log(
               "We have sent a reset password link to your email address"
            )
         )
         .catch((error) => console.log("Error: " + error));
      if (user) logOutUser();
      navigate("/auth/login");
      const domainPart = email.split("@")[1];
      const domainName = domainPart.split(".")[0];
      window.open(`https://${domainName}.com`, "_blank");
   };

   return (
      <div>
         <Helmet>
            <title>Discount Pro | Reset Password</title>
         </Helmet>
         <NavBar />
         <div className='w-11/12 max-w-7xl mx-auto mt-20 bg-gray-50 space-y-3'>
            <div className='max-w-xl px-5 py-10 md:px-10 md:py-16'>
               <h2 className='text-2xl md:text-3xl font-bold mb-10 rounded-sm'>
                  Reset Password
               </h2>
               <form className='space-y-3' onSubmit={handleResetPassword}>
                  <input
                     type='email'
                     name='email'
                     placeholder='Email'
                     className='bg-transparent border-b border-gray-800 w-full py-2 outline-none'
                     defaultValue={emailForForgotPassword}
                     disabled={!!emailForForgotPassword}
                     ref={emailRef}
                  />
                  <input
                     type='submit'
                     name='reset'
                     value='Reset'
                     className='bg-gray-700 font-semibold text-white py-2 px-6 rounded-sm cursor-pointer'
                  />
               </form>
            </div>
         </div>
      </div>
   );
};

export default PasswordReset;

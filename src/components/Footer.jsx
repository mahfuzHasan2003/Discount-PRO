import { FaFacebook, FaGithub } from "react-icons/fa";
import { PiCodeFill } from "react-icons/pi";

const Footer = () => {
   return (
      <div className='bg-gray-100 mt-10'>
         <div className='w-11/12 max-w-7xl mx-auto py-5 text-center space-y-3'>
            <p>© 2024 Mahfuz — all rights reserved</p>
            <div className='flex gap-3 justify-center items-center'>
               <a
                  href='https://www.facebook.com/callMeMahfuz'
                  target='_blank'
                  title='Facebook'>
                  <FaFacebook
                     size={30}
                     className='text-gray-600 hover:text-brown'
                  />
               </a>
               <a
                  href='https://github.com/mahfuzHasan2003'
                  target='_blank'
                  title='Github'>
                  <FaGithub
                     size={30}
                     className='text-gray-600 hover:text-brown'
                  />
               </a>
               <a
                  href='https://codeforces.com/profile/mahfuzhasan2003'
                  target='_blank'
                  title='Codeforces'>
                  <PiCodeFill
                     size={35}
                     className='text-gray-600 hover:text-brown'
                  />
               </a>
            </div>
         </div>
      </div>
   );
};

export default Footer;

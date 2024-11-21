import { IoMdMailUnread } from "react-icons/io";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Newsletter = () => {
   useEffect(() => {
      AOS.init({
         duration: 1000,
         once: false,
         offset: 100,
      });
      AOS.refresh();
   }, []);
   return (
      <section
         className='md:flex items-center justify-center mt-10'
         data-aos='zoom-in-up'>
         <img
            src='https://www.coupons.com/images/256x/newsletter-signup_3_1.png'
            alt='Mail-icon'
            className='mx-auto md:mx-0'
         />
         <div className='space-y-2'>
            <h3 className='font-bold text-gray-800 text-2xl'>Love to save?</h3>
            <p className='text-gray-600'>
               Sign up to our newsletter for the free! It's packed with the
               latest promo codes and top discounts.
            </p>
            <div className='flex'>
               <input
                  type='email'
                  className='border border-brown outline-none px-3 py-1 rounded-s-sm min-w-0'
               />
               <button className='inline-flex items-center gap-2 bg-brown text-white font-semibold hover:bg-brown-dark px-3 py-1 rounded-e-sm text-lg border-brown'>
                  <IoMdMailUnread />
                  Subscribe
               </button>
            </div>
         </div>
      </section>
   );
};

export default Newsletter;

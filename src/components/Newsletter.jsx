import { IoMdMailUnread } from "react-icons/io";

const Newsletter = () => {
   return (
      <section className='md:flex items-center justify-center mt-10'>
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
                  className='border border-brown outline-none px-3 py-1 rounded-s-sm'
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

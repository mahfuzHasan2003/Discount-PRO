import CopyToClipboard from "react-copy-to-clipboard";
import toast from "react-hot-toast";
import { FaRegCopy } from "react-icons/fa6";

const Coupon = ({ coupon, shopLink }) => {
   const { coupon_code, description, expiry_date, condition, coupon_type } =
      coupon;

   return (
      <div className='p-3 md:p-5 bg-white border border-brown rounded-sm flex flex-col'>
         <div className='flex items-center flex-wrap gap-3 mb-2'>
            <button className='py-1 px-2 bg-gray-300 tracking-[0.5rem] font-bold rounded-sm text-gray-600'>
               {coupon_code}
            </button>
            <CopyToClipboard text={coupon_code}>
               <button
                  className='flex gap-1 items-center bg-brown text-white font-semibold py-1 px-2 rounded-sm'
                  onClick={() => toast.success(`Coppied ${coupon_code}`)}>
                  <FaRegCopy /> Copy
               </button>
            </CopyToClipboard>
         </div>
         <table className='w-full'>
            <tr>
               <td className='p-1 text-sm font-semibold'>Coupon Type</td>
               <td className='p-1 text-sm '>:</td>
               <td className='p-1 text-sm '>{coupon_type}</td>
            </tr>
            <tr>
               <td className='p-1 text-sm font-semibold'>Condition</td>
               <td className='p-1 text-sm '>:</td>
               <td className='p-1 text-sm '>{condition}</td>
            </tr>
            <tr>
               <td className='p-1 text-sm font-semibold'>Description</td>
               <td className='p-1 text-sm '>:</td>
               <td className='p-1 text-sm '>{description}</td>
            </tr>
            <tr>
               <td className='p-1 text-sm font-semibold'>Expiry Date</td>
               <td className='p-1 text-sm '>:</td>
               <td className='p-1 text-sm '>{expiry_date}</td>
            </tr>
         </table>
         <a
            href={shopLink}
            target='_blank'
            rel='noopener noreferrer'
            className='px-4 py-2 bg-brown text-white font-semibold block rounded-sm text-center mt-auto'>
            Use Now
         </a>
      </div>
   );
};

export default Coupon;

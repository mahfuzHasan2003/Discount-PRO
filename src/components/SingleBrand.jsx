import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";

const SingleBrand = ({ brand }) => {
   const { brand_name, brand_logo, _id, rating, description, isSaleOn } = brand;

   return (
      <div className='p-5 border border-gray-400 rounded-sm space-y-3 lg:space-y-0 lg:flex lg:justify-between lg:items-center bg-gray-100'>
         <div className='space-y-2'>
            <img src={brand_logo} alt={brand_name} className='h-20' />
            <p className='flex items-center gap-2'>
               <Rating
                  value={rating}
                  readOnly
                  style={{ maxWidth: 80 }}
                  orientation='horizontal'
               />
               <span className='text-xs'>({rating} out of 5)</span>
            </p>
         </div>
         <div className='lg:text-center'>
            <h5 className='text-xl font-bold'>{brand_name}</h5>
            <p>{description}</p>
         </div>
         <div>
            {isSaleOn ? (
               <h6 className='text-green-700 font-black uppercase tracking-wider animate__animated animate__bounceIn animate__infinite'>
                  Sale is on
               </h6>
            ) : null}
            <Link
               to={`/brand/${_id}`}
               className='px-4 py-2 bg-brown hover:bg-brown-dark text-white inline-block font-semibold rounded-sm'>
               <button>View Coupons</button>
            </Link>
         </div>
      </div>
   );
};

export default SingleBrand;

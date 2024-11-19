import { Link } from "react-router-dom";

const BrandOnSaleCard = ({ brand }) => {
   const { _id, brand_logo, brand_name, category, coupons } = brand;
   return (
      <Link to={`/brand/${_id}`}>
         <div className='border p-5 rounded-sm'>
            <img
               src={brand_logo}
               alt={brand_name}
               className='h-32 object-contain'
            />
            <div className='flex items-center gap-2 mt-2'>
               <h3 className='font-semibold text-lg'>{brand_name}</h3>
               <button className='bg-gray-200 px-1 py-px rounded-full text-xs text-gray-700 font-medium border border-gray-400'>
                  {category}
               </button>
            </div>
            <p>
               <span className='font-semibold'>Total Coupons:</span>{" "}
               {coupons.length}
            </p>
         </div>
      </Link>
   );
};

export default BrandOnSaleCard;

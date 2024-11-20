import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BrandsContext } from "../provider/BrandsDataProvider";
import Loader from "../utilities/Loader";
import { Rating } from "@smastrom/react-rating";
import Coupon from "../components/Coupon";
import { Helmet } from "react-helmet";
import NavBar from "../components/NavBar";

const BrandDetails = () => {
   const { allBrandsData } = useContext(BrandsContext);
   const { id } = useParams();
   const [targetedBrand, setTargetedBrand] = useState({});
   const [loading, setLoading] = useState(true);

   const { brand_name, rating, brand_logo, coupons, shop_Link } = targetedBrand;

   useEffect(() => {
      if (allBrandsData) {
         setTargetedBrand(allBrandsData.find((brands) => brands._id === id));
         setLoading(false);
      }
   }, [allBrandsData, id]);
   if (loading) return <Loader />;

   return (
      <div>
         <Helmet>
            <title>Discount Pro | Brand Details</title>
         </Helmet>
         <NavBar />
         <div className='w-11/12 max-w-7xl mx-auto mt-10'>
            <div className='space-y-3'>
               <div className='lg:flex items-center justify-center gap-3'>
                  <img
                     src={brand_logo}
                     alt={brand_name}
                     className='h-32 mb-2 lg:mb-0'
                  />
                  <h2 className='text-2xl font-bold'>{brand_name}</h2>
               </div>
               <p className='flex items-center gap-2 lg:justify-center'>
                  <Rating
                     value={rating}
                     readOnly
                     style={{ maxWidth: 120 }}
                     orientation='horizontal'
                  />
                  <span className='text-sm'>({rating} out of 5)</span>
               </p>
            </div>
            <div className='mt-10 md:mt-20 bg-gray-100 p-3 md:p-5 rounded-sm'>
               <h2 className='font-bold text-lg mb-5'>
                  Available coupons from {brand_name}
               </h2>
               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5'>
                  {coupons.map((coupon, idx) => (
                     <Coupon key={idx} coupon={coupon} shopLink={shop_Link} />
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export default BrandDetails;

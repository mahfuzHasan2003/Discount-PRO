import { useContext } from "react";
import { BrandsContext } from "../provider/BrandsDataProvider";
import SingleBrand from "../components/SingleBrand";
import { IoSearch } from "react-icons/io5";
import { Helmet } from "react-helmet";

const Brands = () => {
   const { allBrandsData } = useContext(BrandsContext);
   return (
      <div className='w-11/12 max-w-7xl mx-auto my-10 space-y-7'>
         <Helmet>
            <title>Discount Pro | All Brands</title>
         </Helmet>
         <div className='md:flex justify-between items-center'>
            <h2 className='text-2xl md:text-3xl font-bold'>
               All Your Favorite Brands
            </h2>
            <div className='relative mt-3 md:mt-0'>
               <input
                  type='text'
                  className='px-2 py-1 pl-8 outline-none border border-brown rounded-sm relative font-medium'
                  placeholder='Search Brands...'
               />
               <IoSearch className='absolute left-2 top-1/2 -translate-y-1/2 text-gray-600' />
            </div>
         </div>
         <div className='flex flex-col gap-3 md:gap-5'>
            {allBrandsData.map((brand) => (
               <SingleBrand key={brand._id} brand={brand} />
            ))}
         </div>
      </div>
   );
};

export default Brands;

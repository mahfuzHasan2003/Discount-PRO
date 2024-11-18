import { useContext } from "react";
import { BrandsContext } from "../provider/BrandsDataProvider";
import SingleBrand from "../components/SingleBrand";

const Brands = () => {
   const { allBrandsData } = useContext(BrandsContext);
   return (
      <div className='w-11/12 max-w-7xl mx-auto my-10 space-y-7'>
         <h2 className='text-2xl md:text-3xl font-bold'>
            All Your Favorite Brands
         </h2>
         <div className='flex flex-col gap-3 md:gap-5'>
            {allBrandsData.map((brand) => (
               <SingleBrand key={brand._id} brand={brand} />
            ))}
         </div>
      </div>
   );
};

export default Brands;

import { useContext } from "react";
import { BrandsContext } from "../provider/BrandsDataProvider";
import BrandOnSaleCard from "./BrandOnSaleCard";

const BrandsOnSell = () => {
   const { isSaleOn } = useContext(BrandsContext);
   return (
      <section className='space-y-3 md:space-y-5 mb-10'>
         <h2 className='text-2xl md:text-3xl font-bold'>Brands on Sell</h2>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
            {isSaleOn.map((brand) => (
               <BrandOnSaleCard key={brand._id} brand={brand} />
            ))}
         </div>
      </section>
   );
};

export default BrandsOnSell;

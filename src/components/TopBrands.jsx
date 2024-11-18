import { useContext } from "react";
import Marquee from "react-fast-marquee";
import { BrandsContext } from "../provider/BrandsDataProvider";

const TopBrands = () => {
   const { allBrandsData } = useContext(BrandsContext);

   return (
      <section className='space-y-3 md:space-y-5 mb-10 lg:mb-16'>
         <h2 className='text-2xl md:text-3xl font-bold'>Top Brands</h2>
         <p className='max-w-2xl'>
            Discover the best deals from top brands in the industry. Our curated
            selection features popular names offering quality products and
            exclusive discounts. Shop with confidence and find your favorite
            brands in one place!
         </p>
         <Marquee pauseOnHover>
            {allBrandsData.map((singleBrand) => (
               <img
                  key={singleBrand._id}
                  src={singleBrand.brand_logo}
                  alt={singleBrand.brand_name}
                  className='h-20 mr-5'
               />
            ))}
         </Marquee>
      </section>
   );
};

export default TopBrands;

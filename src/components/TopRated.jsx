import { useContext } from "react";
import Card from "./Card";
import { BrandsContext } from "../provider/BrandsDataProvider";

const TopRated = () => {
   const { topRated } = useContext(BrandsContext);
   return (
      <section className='space-y-3 md:space-y-5 mb-10 bg-gray-100 p-5'>
         <h2 className='text-2xl md:text-3xl font-bold'>
            Top Picks: Rated 4.5+ 🌟
         </h2>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
            {topRated.map((brand) => (
               <Card key={brand._id} brand={brand} />
            ))}
         </div>
      </section>
   );
};

export default TopRated;

import { Helmet } from "react-helmet";
import BrandsOnSell from "../components/BrandsOnSell";
import Newsletter from "../components/Newsletter";
import TopBannerSlider from "../components/TopBannerSlider";
import TopBrands from "../components/TopBrands";

const Home = () => {
   return (
      <div className='w-11/12 max-w-7xl mx-auto mt-5'>
         <Helmet>
            <title>Discount Pro | Home</title>
         </Helmet>
         <TopBannerSlider />
         <TopBrands />
         <BrandsOnSell />
         <Newsletter />
      </div>
   );
};

export default Home;

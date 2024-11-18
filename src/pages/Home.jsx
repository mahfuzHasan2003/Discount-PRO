import BrandsOnSell from "../components/BrandsOnSell";
import TopBannerSlider from "../components/TopBannerSlider";
import TopBrands from "../components/TopBrands";

const Home = () => {
   return (
      <div className='w-11/12 max-w-7xl mx-auto mt-5'>
         <TopBannerSlider />
         <TopBrands />
         <BrandsOnSell />
      </div>
   );
};

export default Home;

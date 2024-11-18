import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const TopBannerSlider = () => {
   return (
      <div className='mb-10 lg:mb-16'>
         <Swiper
            pagination={{
               type: "fraction",
            }}
            autoplay={{
               delay: 2500,
               disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className='mySwiper'>
            <SwiperSlide>
               <img
                  src='https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg'
                  className='h-32 md:h-40 w-full object-cover object-top'
               />
            </SwiperSlide>
            <SwiperSlide>
               <img
                  src='https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg'
                  className='h-32 md:h-40 w-full object-cover object-top'
               />
            </SwiperSlide>
            <SwiperSlide>
               <img
                  src='https://m.media-amazon.com/images/I/71qcoYgEhzL._SX3000_.jpg'
                  className='h-32 md:h-40 w-full object-cover object-top'
               />
            </SwiperSlide>
            <SwiperSlide>
               <img
                  src='https://m.media-amazon.com/images/I/71fgNuf3lIL._SX3000_.jpg'
                  className='h-32 md:h-40 w-full object-cover object-top'
               />
            </SwiperSlide>
         </Swiper>
      </div>
   );
};

export default TopBannerSlider;

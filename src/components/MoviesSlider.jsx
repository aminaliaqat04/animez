import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard, EffectCoverflow, Pagination, Scrollbar, Zoom } from 'swiper/modules';
import 'swiper/css/bundle';

const MoviesSlider = () => {
    return (
        <>
            
      <Swiper 
        effect={"coverflow"}
        modules={[Autoplay, Keyboard, EffectCoverflow, Pagination, Scrollbar, Zoom]}
        spaceBetween={10}
        speed={1000}
        loop={true}
        grabCursor= {true}
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        autoplay={{delay: 0, disableOnInteraction: false}}
        breakpoints= {{
          // when window width is >= 320px
          320: {
            slidesPerView: 2,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 3,
          },
          1440: {
            slidesPerView: 4,
          }
        }}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        
        
      >
        <SwiperSlide><img src={require('../assets/images/img1.jpg')} className="h-[300px] lg:h-[500px] w-full" alt='animated movies'/></SwiperSlide>
        <SwiperSlide><img src={require('../assets/images/img2.png')} className="h-[300px] lg:h-[500px] w-full" alt='animated movies'/></SwiperSlide>
        <SwiperSlide><img src={require('../assets/images/img3.gif')} className="h-[300px] lg:h-[500px] w-full" alt='animated movies'/></SwiperSlide>
        <SwiperSlide><img src={require('../assets/images/img1.jpg')} className="h-[300px] lg:h-[500px] w-full" alt='animated movies'/></SwiperSlide>
        <SwiperSlide><img src={require('../assets/images/img2.png')} className="h-[300px] lg:h-[500px] w-full" alt='animated movies'/></SwiperSlide>
        <SwiperSlide><img src={require('../assets/images/img3.gif')} className="h-[300px] lg:h-[500px] w-full" alt='animated movies'/></SwiperSlide>
      </Swiper>
        </>
    )
}

export default MoviesSlider
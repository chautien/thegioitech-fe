import React, { useState } from 'react';
// import Swiper core and required modules
import SwiperCore from 'swiper';
// Import Swiper styles
import 'swiper/swiper.scss';
// import 'swiper/css/navigation';
// import 'swiper/css/thumbs';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/swiper.esm';

// install Swiper modules
SwiperCore.use([Navigation, Thumbs]);

export const BannerSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className='banner-slider-global-wrap'>
      <div className='container banner-slider-wrap'>
        <div className='banner-slider'>
          <Swiper
            style={{
              '--swiper-navigation-color': '#fff',
              '--swiper-pagination-color': '#fff',
            }}
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            className='mySwiper2'
          >
            <SwiperSlide>
              <img src='https://swiperjs.com/demos/images/nature-1.jpg' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='https://swiperjs.com/demos/images/nature-2.jpg' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='https://swiperjs.com/demos/images/nature-3.jpg' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='https://swiperjs.com/demos/images/nature-4.jpg' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='https://swiperjs.com/demos/images/nature-5.jpg' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='https://swiperjs.com/demos/images/nature-6.jpg' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='https://swiperjs.com/demos/images/nature-7.jpg' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='https://swiperjs.com/demos/images/nature-8.jpg' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='https://swiperjs.com/demos/images/nature-9.jpg' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='https://swiperjs.com/demos/images/nature-10.jpg' />
            </SwiperSlide>
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            className='mySwiper'
          >
            <SwiperSlide>
              <img src='https://swiperjs.com/demos/images/nature-1.jpg' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='https://swiperjs.com/demos/images/nature-2.jpg' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='https://swiperjs.com/demos/images/nature-3.jpg' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='https://swiperjs.com/demos/images/nature-4.jpg' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='https://swiperjs.com/demos/images/nature-5.jpg' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='https://swiperjs.com/demos/images/nature-6.jpg' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='https://swiperjs.com/demos/images/nature-7.jpg' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='https://swiperjs.com/demos/images/nature-8.jpg' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='https://swiperjs.com/demos/images/nature-9.jpg' />
            </SwiperSlide>
            <SwiperSlide>
              <h2>Iphone 12 pro max</h2>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

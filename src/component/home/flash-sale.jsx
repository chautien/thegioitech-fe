import {
  faBolt,
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { discountPrice, formatCurrency, slugify } from '../../util';
import 'swiper/swiper.scss';

import { Mock_products } from '../../constant';

export const FlashSale = () => {
  const [flashSaleProducts] = useState(() =>
    Mock_products.filter((product) => product.flash_sale === true)
  );
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <section className='container flashsale-wrap'>
      <div className='flashsale'>
        <div className='flashsale-heading'>
          <h4 className='flashsale-heading-text'>
            F<FontAwesomeIcon icon={faBolt} />
            ASH SALE ONLINE
          </h4>
        </div>
        <div className='flashsale-slider-wrap'>
          <div className='flashsale-slider'>
            <Swiper
              spaceBetween={14}
              slidesPerView={5}
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              className='slider-container'
            >
              {flashSaleProducts?.map(
                ({ thumbnail, name, option, discount }, index) => (
                  <SwiperSlide key={index} className='slider-card'>
                    <div className='slider-card-heading'>
                      <Link to='/' className='slider-card-link'>
                        <img
                          src={thumbnail}
                          alt={slugify(name)}
                          className='slider-card-image'
                        />
                      </Link>
                    </div>
                    <div className='slider-card-content'>
                      <h5 className='slider-card-name'>
                        <Link to='/' className='slider-card-content-link'>
                          {name}
                        </Link>
                      </h5>
                      <div className='slider-card-price-box'>
                        <span className='slider-card-price new'>
                          {discountPrice(option[0].price, discount)}
                        </span>
                        <del className='slider-card-price old'>
                          {formatCurrency(option[0].price)}
                        </del>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              )}
              <button
                ref={navigationPrevRef}
                type='button'
                className='btn slider-navigation left'
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button
                ref={navigationNextRef}
                type='button'
                className='btn slider-navigation right'
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

import { useState } from 'react';
import { HeroSlider } from './hero-slider';
import { FlashSale } from './flash-sale';
import './home.scss';
import { BoxProduct } from '../common/box-product';
import axios from 'axios';

const Mock_Slider = [
  {
    image:
      'https://cdn.hoanghamobile.com/i/home/Uploads/2021/11/04/s21-moi-01.jpg',
    text: 'S21 Series Giảm siêu sốc',
  },
  {
    image:
      'https://cdn.hoanghamobile.com/i/home/Uploads/2021/11/08/web-01-1.jpg',
    text: 'ZFold3 |Flip3 5G - Ưu đãi giảm tới 11.700.000đ',
  },
  {
    image:
      'https://cdn.hoanghamobile.com/i/home/Uploads/2021/10/25/iphone-13-series-pre-111.jpg',
    text: 'iPhone 13 Series - Giá sốc',
  },
  {
    image:
      'https://cdn.hoanghamobile.com/i/home/Uploads/2021/11/10/lenovo-m10-02-1.jpg',
    text: 'Sản phẩm mới Lenovo M10 | M10 Gen 2',
  },
  {
    image:
      'https://cdn.hoanghamobile.com/i/home/Uploads/2021/11/11/web-xiaomi.jpg',
    text: 'Xiaomi 11 Lite 5G NE (Swarovski)',
  },
];

export const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const [products, setProducts] = useState();
  const [sliders] = useState([...Mock_Slider]);
  const getProducts = () => {
    axios
      .get(`https://thegioitech-be.herokuapp.com/api/product`)
      .then((res) => {
        const myProducts = res.data.products;
        setProducts(myProducts);
      })
      .catch((err) => {});
  };

  getProducts();
  return (
    <main className='home-global-wrap'>
      <HeroSlider sliders={sliders} />
      <FlashSale />
      <BoxProduct
        name='Điện thoại nổi bật nhất'
        products={products}
        loading={false}
        numberOfItem={10}
        className='trending'
        to='category/dien-thoai'
      />

      <BoxProduct
        name='Laptop'
        products={products}
        loading={false}
        numberOfItem={5}
        className='trending'
        to='category/laptop'
      />
      <BoxProduct
        name='Máy tính bảng'
        products={products}
        loading={false}
        numberOfItem={5}
        className='trending'
        to='category/may-tinh-bang'
      />
    </main>
  );
};

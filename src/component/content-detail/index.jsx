import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Comment } from './comment';
import { ProductBox } from './product-box';
import { BoxProduct } from '../common/';
import { Store } from './store';
import { ProductSlider } from './product-slider';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import './content-detail.scss';

import { Mock_products } from '../../constant.js';
import { ProductSpecs } from './product-specs';

export const ContentDetail = () => {
  const { slug } = useParams();
  const [product] = useState(
    () => [...Mock_products].filter((product) => product._id === slug)[0]
  );
  const [isArticleExpand, setIsArticleExpand] = useState(false);
  const {
    name,
    product_image,
    _id,
    flash_sale,
    article,
    thumbnail,
    specification,
  } = product;

  const handleArticleAction = () => {
    setIsArticleExpand(!isArticleExpand);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className='content-wrap'>
      <div className='container content'>
        <div className='content-heading'>
          <h1 className='content-heading-text'>{name}</h1>
          {flash_sale && (
            <span className='content-heading-flashsale'>Flash sale</span>
          )}
        </div>
        <section className='detail-box-wrap'>
          <div className='detail-box'>
            <ProductSlider images={product_image} />
            <ProductBox product={product} />
            <Store />
          </div>
        </section>
        <section className='description'>
          <div
            className={isArticleExpand ? `article article-expand` : `article`}
          >
            {parse(article)}
            <button
              onClick={handleArticleAction}
              type='button'
              className='btn article-btn'
            >
              {isArticleExpand ? 'Thu gọn' : 'Xem thêm'}
            </button>
          </div>
          <div className='specs'>
            <div className='specs-heading'>
              <h6 className='specs-heading-text'>Thông số kỹ thuật {name}</h6>
              <div className='specs-heading-media'>
                <img
                  src={thumbnail}
                  alt={name}
                  className='specs-heading-media-img'
                />
              </div>
              <button className='btn specs-heading-action'>
                <FontAwesomeIcon icon={faGear} />
                <span>Cấu hình chi tiết</span>
              </button>
            </div>
            <div className='specs-content'>
              <ProductSpecs specsList={specification} />
            </div>
          </div>
        </section>
        <BoxProduct
          name='Sản phẩm tương tự'
          products={Mock_products}
          loading={false}
          numberOfItem={5}
          className='product-relate'
        />
        <Comment name={name} productId={_id} />
      </div>
    </main>
  );
};

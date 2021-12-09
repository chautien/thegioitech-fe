import axios from 'axios';
import { useEffect, useState } from 'react';
import { ContentDetail, Footer, Header } from '../component';
import { productService } from '../services';

const ContentDetailPage = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    axios.get(
      'https://thegioitech-be.herokuapp.com/api/product/619e05a22b2a9c1407feb2d6'
    );
    productService.getProduct().then((payload) => {
      setProducts(payload.products);
    });
  }, []);
  return (
    <>
      <Header />
      <ContentDetail products={products} />
      <Footer />
    </>
  );
};

export default ContentDetailPage;

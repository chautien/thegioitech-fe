import { useEffect, useState } from 'react';
import { ContentDetail, Footer, Header } from '../component';
import { productService } from '../services';

const ContentDetailPage = () => {
  const [products, setProducts] = useState()

  useEffect(() => {
    productService.getProduct().then((payload) => {
      setProducts(payload.products)
    })
  }, [])
  return (
    <>
      <Header />
      <ContentDetail products={products}/>
      <Footer />
    </>
  );
};

export default ContentDetailPage;

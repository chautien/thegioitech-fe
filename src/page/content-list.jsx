import { Footer, Header } from '../component';
import { getQueryString } from '../util';

const ContentListPage = (props) => {
  console.log(getQueryString(props.location));

  return (
    <>
      <Header />
      <main className='main-global-wrap'></main>
      <Footer />
    </>
  );
};

export default ContentListPage;

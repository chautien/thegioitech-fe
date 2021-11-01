import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { SearchItem } from './search-item';

const Mock_Item_Search = [
  {
    name: 'Lorem ipsum domit',
    price: 3420000,
    image:
      'https://hoanghamobile.com/productlist/dst/Uploads/2020/09/22/Tai%20nghe%20Apple%20AirPods%20Pro.png',
  },
  {
    name: 'Apple AirPods Pro - Chính Hãng VN/A',
    price: 420000,
    image:
      'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2020/09/23/JBL%20EVEREST%20ELITE%20750%20NC%20.png',
  },
  {
    name: 'Tai nghe Tai nghe Apple Beats Solo3 Wireless Headphones - Chính hãng FPT',
    price: 5420000,
    image:
      'https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2020/09/23/JBL%20EVEREST%20ELITE%20750%20NC%20.png',
  },
  {
    name: 'Loa JBL Charge 5 - Chính hãng',
    price: 3820000,
    image:
      'https://cdn.hoanghamobile.com/i/productlist/dsp/Uploads/2021/03/09/image-removebg-preview-6.png',
  },
];

export const Search = () => {
  const [SearchData] = useState([...Mock_Item_Search]);
  const [filterData, setFilterData] = useState([]);
  const [message, setMessage] = useState(undefined);
  const [filterMessage, setFilterMessage] = useState('');
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    const handleOuterClick = ({ target }) => {
      if (target.className !== 'header-search-data') {
        setMessage(undefined);
        setFilterMessage('');
        setFilterData([]);
      }
    };
    if (filterData.length > 0 || message) {
      window.addEventListener('click', handleOuterClick);
    }
    return () => {
      window.removeEventListener('click', handleOuterClick);
    };
  }, [filterData, message]);

  const onSearchFormSubmit = (data) => {
    // const query = data.search.replace(/\s/g, '').toLowerCase();
    const query = data.search.trim().toLowerCase();

    if (!query) {
      setFilterData([]);
      setMessage(undefined);
      return;
    }
    const filter = SearchData.filter(({ name }) => {
      return name.toLocaleLowerCase().includes(query);
    });
    if (filter.length > 0) {
      setFilterData(filter);
      setFilterMessage(query);
      setMessage(undefined);
    } else {
      setFilterData([]);
      setMessage('Not found');
      setFilterMessage('');
    }
  };

  return (
    <section className='header-search-wrap'>
      <div className='header-search'>
        <form
          onChange={handleSubmit(onSearchFormSubmit)}
          onSubmit={handleSubmit(onSearchFormSubmit)}
          className='header-search-form'
        >
          <input
            {...register('search')}
            placeholder='Hôm nay bạn cần tìm gì?'
            className='form-input header-search-input'
          />
          <button
            title='search button'
            type='submit'
            className='btn header-search-btn'
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
        {(filterData.length > 0 || message) && (
          <section className='header-search-data'>
            {filterData.map((item, index) => (
              <SearchItem key={index} data={item} />
            ))}
            {filterData.length > 0 && (
              <Link
                to={`/search/${filterMessage}`}
                className='header-search-filter-message'
              >
                Hiển thị kết quả cho {<span>{filterMessage}</span>}
              </Link>
            )}
            {message && <span>{message}</span>}
          </section>
        )}
      </div>
    </section>
  );
};

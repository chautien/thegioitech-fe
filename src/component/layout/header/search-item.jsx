import { Link } from 'react-router-dom';
import { formatCurrency } from '../../../util';

export const SearchItem = ({ data: { image, name, price } }) => {
  return (
    <div className='header-search-item'>
      <div className='search-item-media'>
        <Link to={`/detail/${'slug'}`}>
          <img src={image} alt={name} className='search-item-image' />
        </Link>
      </div>
      <div className='search-item-content'>
        <h4 className='search-item-name'>
          <Link to={`/detail/${'slug'}`}>{name}</Link>
        </h4>
        <p className='search-item-text'>{formatCurrency(price)}</p>
      </div>
    </div>
  );
};

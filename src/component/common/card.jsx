import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { discountPrice, formatCurrency } from '../../util';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

export const Card = (props) => {
  const { data, loading } = props;
  // eslint-disable-next-line no-unused-vars
  const { slug, _id, thumbnail, name, option, discount } = data;
  const history = useHistory();
  const param = [slug, _id].join('-');

  const handleAddToCard = () => {
    console.log('Add to card!');
  };
  const handleBuyNow = () => {
    console.log('Buy now!');
    history.push('/card');
  };

  return (
    <article className='card'>
      {loading && <span>Loading ...</span>}
      {!loading && data && (
        <>
          {discount > 0 && <span className='card-label'>Giảm {discount}%</span>}
          <div className='card-heading'>
            <Link to={param} className='card-heading-link'>
              <img
                src={thumbnail.location}
                alt={name}
                className='card-heading-image'
              />
            </Link>
          </div>
          <div className='card-content'>
            <h5 className='card-content-heading'>
              <Link to={param} className='card-content-heading-link'>
                {name}
              </Link>
            </h5>
            <div className='card-content-price-box'>
              <span className='card-content-price price-left'>
                {option ? discountPrice(option[0].price, discount) : 0}
              </span>
              <span className='card-content-price price-right'>
                {option ? formatCurrency(option[0].price) : 0}
              </span>
            </div>
            <div className='card-content-action-box'>
              <button
                type='button'
                onClick={handleBuyNow}
                className='btn card-content-action-buy'
              >
                Mua ngay
              </button>
              <button
                onClick={handleAddToCard}
                type='button'
                className='btn card-content-action-add'
              >
                <FontAwesomeIcon icon={faCartPlus} />
              </button>
            </div>
          </div>
        </>
      )}
    </article>
  );
};

Card.propTypes = {
  data: PropTypes.object,
  path: PropTypes.string,
};
Card.defaultProps = {
  data: {},
  path: '',
};

import { Link } from 'react-router-dom';
import { selectCart } from '../../redux/cartSlice';
import './cart.scss';
import {CartItem} from './cartItem';
import { Info } from './info';
import { Total } from './total';
import { useSelector } from 'react-redux';

export const Cart = () => {

  const cart = useSelector(selectCart)

  return (
    <section>
      <div className="container">
        <div className="cart">
          <div className="header">
            <div className="back">
              <Link to="/">
                <i className="icon-leftar" />
                <strong>Quay lại</strong>
              </Link>
            </div>
          </div>
          <div className="cart-layout">
            <div className="cart-info" id="cartInfo">
              <div className="cart-icon">

                <label>Giỏ hàng</label>
              </div>
              {
                cart.map((value) => {
                  return <CartItem  product={value} />
                })
              }
              <Total />
            </div>
            <div className="cart-form">
              <Info />
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

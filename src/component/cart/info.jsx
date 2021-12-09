import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartAction, selectCart } from '../../redux/cartSlice';
import { orderService } from '../../services';
import { cart } from '../../util/cart';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import { isEmail } from 'validator';

export const Info = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [node, setNode] = useState('');
  const cartSlice = useSelector(selectCart);
  const dispatch = useDispatch();
  const history = useHistory();

  function submit() {
    var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    if (
      email.length < 1 &&
      phone.length < 1 &&
      address.length < 1 &&
      node.length < 1
    ) {
      swal('Bạn phải nhập đầy đủ thông tin');
    } else if (!vnf_regex.test(phone)) {
      swal('Bạn cần điền đúng định dạng số điện thoại');
    } else if (!isEmail(email)) {
      swal('Bạn phải nhập đúng định dạng email');
    }
    
    
    else {
      const data = {
        name,
        phone,
        address,
        email,
        node,
        cart: cartSlice,
        priceTotal: cart.totalPrice(cartSlice),
      };
      orderService.order(data).then(() => {
        swal('Đặt hàng thành công');
        dispatch(cartAction.setCart([]));
        return history.push('/');
      });
    }
  }
  return (
    <form>
      <h3>Thông tin đặt hàng</h3>

      <p className='text-gray'>
        <i>Bạn cần nhập đầy đủ các trường thông tin có dấu </i>
      </p>
      <div className='row'>
        <div className='col'>
          <div className='control'>
            <input
              name='Title'
              type='text'
              placeholder='Họ và tên '
              onChange={(event) => setName(event.target.value)}
            />
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <div className='control'>
            <input
              name='Phone'
              type='tel'
              placeholder='Số điện thoại '
              onChange={(event) => setPhone(event.target.value)}
            />
          </div>
        </div>
      </div>
      <div className='row shInfo'>
        <div className='col'>
          <div className='control'>
            <input
              name='Address'
              type='text'
              placeholder='Địa chỉ nhận hàng '
              onChange={(event) => setAddress(event.target.value)}
            />
          </div>
        </div>
      </div>
      <div className='row shInfo'>
        <div className='col'>
          <div className='control'>
            <input
              name='Email'
              type='email'
              placeholder='Email'
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
        </div>
      </div>
      <div className='row shInfo'>
        <div className='col'>
          <div className='control'>
            <textarea
              name='Note'
              placeholder='Ghi chú'
              onChange={(event) => setNode(event.target.value)}
            />
          </div>
        </div>
      </div>

      <div className='row shInfo'>
        <div className='control-button'>
          <button onClick={() => submit()} type='button'>
            XÁC NHẬN VÀ ĐẶT HÀNG
          </button>
        </div>
      </div>
    </form>
  );
};



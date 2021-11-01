import { Link } from 'react-router-dom';
import { PublicPath } from '../../../constant';
import './footer.scss';

const FooterImagePath = PublicPath.concat('/static/image/footer/');

export const Footer = () => {
  return (
    <footer className='footer-global-wrap'>
      <section className='container footer-wrap'>
        <section className='footer-nav'>
          <div className='footer-nav-row'>
            <section className='footer-nav-col'>
              <h5 className='footer-nav-heading'>Hỗ Trợ - Dịch Vụ</h5>
              <ul className='footer-nav-list'>
                <li className='footer-nav-item'>
                  <Link to='/' className='footer-nav-link'>
                    Mua hàng trả góp
                  </Link>
                </li>
                <li className='footer-nav-item'>
                  <Link to='/' className='footer-nav-link'>
                    Hướng dẫn đặt hàng và thanh toán
                  </Link>
                </li>
                <li className='footer-nav-item'>
                  <Link to='/' className='footer-nav-link'>
                    Chính sách bảo hành
                  </Link>
                </li>
                <li className='footer-nav-item'>
                  <Link to='/' className='footer-nav-link'>
                    Câu hỏi thường gặp
                  </Link>
                </li>
                <li className='footer-nav-item'>
                  <Link to='/order-check' className='footer-nav-link'>
                    Tra cứu đơn hàng
                  </Link>
                </li>
                <li className='footer-nav-item'>
                  <Link to='/order-check' className='footer-nav-link'>
                    Tra cứu đơn hàng
                  </Link>
                </li>
                <li className='footer-nav-item'>
                  <Link to='/order-check' className='footer-nav-link'>
                    Tra cứu đơn hàng
                  </Link>
                </li>
                <li className='footer-nav-item'>
                  <Link to='/order-check' className='footer-nav-link'>
                    Chính sách bảo mật
                  </Link>
                </li>
                <li className='footer-nav-item'>
                  <Link to='/order-check' className='footer-nav-link'>
                    Chính sách hủy giao dịch, đổi trả
                  </Link>
                </li>
              </ul>
            </section>
            <section className='footer-nav-col'>
              <h5 className='footer-nav-heading'>Thông Tin Liên Hệ</h5>
              <ul className='footer-nav-list'>
                <li className='footer-nav-item'>
                  <Link to='/' className='footer-nav-link'>
                    Bán hàng Online
                  </Link>
                </li>
                <li className='footer-nav-item'>
                  <Link to='/' className='footer-nav-link'>
                    Chăm sóc Khách Hàng
                  </Link>
                </li>
                <li className='footer-nav-item'>
                  <Link to='/' className='footer-nav-link'>
                    Hỗ Trợ Kỹ thuật
                  </Link>
                </li>
                <li className='footer-nav-item'>
                  <Link to='/' className='footer-nav-link'>
                    Hỗ trợ Bảo hành &amp; Sửa chữa
                  </Link>
                </li>
                <li className='footer-nav-item'>
                  <Link to='/order-check' className='footer-nav-link'>
                    Liên hệ khối văn phòng
                  </Link>
                </li>
              </ul>
            </section>
            <section className='footer-nav-col'>
              <h5 className='footer-nav-heading'>
                Hệ thống 79 siêu thị trên toàn quốc
              </h5>
              <ul className='footer-nav-list'>
                <li className='footer-nav-item'>
                  <Link to='/' className='footer-nav-link'>
                    Danh sách 79 siêu thị trên toàn quốc
                  </Link>
                </li>
              </ul>
            </section>
            <section className='footer-nav-col'>
              <h5 className='footer-nav-heading'>Tổng đài</h5>
              <a href='tel:19008198' className='footer-nav-text-number'>
                1900.8198
              </a>
            </section>
            <section className='footer-nav-col'>
              <h5 className='footer-nav-heading'>Thanh toán miễn phí</h5>
              <ul className='footer-nav-img-list'>
                <li className='footer-nav-img-item'>
                  <img
                    src={FooterImagePath.concat('logo-visa.png')}
                    alt='visa'
                  />
                  <img
                    src={FooterImagePath.concat('logo-master.png')}
                    alt='mastercard'
                  />
                </li>
                <li className='footer-nav-img-item'>
                  <img src={FooterImagePath.concat('logo-jcb.png')} alt='jcb' />
                  <img
                    src={FooterImagePath.concat('logo-samsungpay.png')}
                    alt='samsung pay'
                  />
                </li>
                <li className='footer-nav-img-item'>
                  <img src={FooterImagePath.concat('logo-atm.png')} alt='atm' />
                  <img
                    src={FooterImagePath.concat('logo-vnpay.png')}
                    alt='vnpay'
                  />
                </li>
              </ul>
            </section>
            <section className='footer-nav-col'>
              <h5 className='footer-nav-heading'>Hình thức vận chuyển</h5>
              <ul className='footer-nav-img-list'>
                <li className='footer-nav-img-item'>
                  <img
                    src={FooterImagePath.concat('nhattin.jpg')}
                    alt='Nhất tín'
                  />
                  <img
                    src={FooterImagePath.concat('vnpost.jpg')}
                    alt='vnpost'
                  />
                </li>
                <li className='footer-nav-img-item footer-nav-img-full'>
                  <img
                    src={FooterImagePath.concat('logo-bct.png')}
                    alt='bộ công thương'
                  />
                </li>
              </ul>
            </section>
          </div>
        </section>
        <section className='footer-info'>
          <p className='footer-info-text'>
            © 2020. CÔNG TY CỔ PHẦN XÂY DỰNG VÀ ĐẦU TƯ THƯƠNG MẠI HOÀNG HÀ. MST:
            0106713191. (Đăng ký lần đầu: Ngày 15 tháng 12 năm 2014, Đăng ký
            thay đổi ngày 29/12/2020)
          </p>
          <p className='footer-info-text'>
            GP số 426/GP-TTĐT do sở TTTT Hà Nội cấp ngày 22/01/2021
          </p>
          <p className='footer-info-text'>
            Địa chỉ: 26 Phù Đổng Thiên Vương, P.Phạm Đình Hổ, Q. Hai Bà Trưng,
            Hà Nội. Điện thoại: 1900.2091. Chịu trách nhiệm nội dung: Hoàng Ngọc
            Chiến.
          </p>
          <p className='footer-info-text'>
            Designed by: {<b>Chau Tien</b>} @kentlee.design
          </p>
        </section>
      </section>
    </footer>
  );
};

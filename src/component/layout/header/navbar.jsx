import {
  faClock,
  faHome,
  faLaptop,
  faMobileScreenButton,
  faTabletScreenButton,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavItem } from './nav-item';

const Slugs = ['dien-thoai', 'dong-ho', 'laptop', 'tablet'];
const Path = '/category/';

export const Navbar = () => {
  return (
    <nav className='nav-global-wrap'>
      <section className='container nav-wrap'>
        <NavItem
          path='/'
          icon={<FontAwesomeIcon icon={faHome} />}
          name='Trang chủ'
        />
        <NavItem
          path={Path.concat(Slugs[0])}
          icon={<FontAwesomeIcon icon={faMobileScreenButton} />}
          name='Điện thoại'
        />
        <NavItem
          path={Path.concat(Slugs[1])}
          icon={<FontAwesomeIcon icon={faClock} />}
          name='Đồng hồ'
        />
        <NavItem
          path={Path.concat(Slugs[2])}
          icon={<FontAwesomeIcon icon={faLaptop} />}
          name='Laptop'
        />
        <NavItem
          path={Path.concat(Slugs[3])}
          icon={<FontAwesomeIcon icon={faTabletScreenButton} />}
          name='Tablet'
        />
      </section>
    </nav>
  );
};

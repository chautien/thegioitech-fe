import { faHandshake } from '@fortawesome/free-regular-svg-icons';
import {
  faClock,
  faFire,
  faFlask,
  faGamepad,
  faHeadphones,
  faHome,
  faLaptop,
  faMobileScreenButton,
  faNewspaper,
  faScrewdriverWrench,
  faSimCard,
  faTabletScreenButton,
  faToolbox,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavItem } from './nav-item';

const Slugs = [
  'dien-thoai',
  'dong-ho',
  'laptop',
  'tablet',
  'am-thanh',
  'smart-home',
  'phu-kien',
  'do-choi-cong-nghe',
  'may-cu',
  'sua-chua',
  'sim-the',
  'tin-tuc',
  'flash-sale',
  'khuyen-mai',
];
const Path = '/category/';

export const Navbar = () => {
  return (
    <nav className='nav-global-wrap'>
      <section className='container nav-wrap'>
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
        <NavItem
          path={Path.concat(Slugs[4])}
          icon={<FontAwesomeIcon icon={faHeadphones} />}
          name='Âm thanh'
        />
        <NavItem
          path={Path.concat(Slugs[5])}
          icon={<FontAwesomeIcon icon={faHome} />}
          name='Smart home'
        />
        <NavItem
          path={Path.concat(Slugs[6])}
          icon={<FontAwesomeIcon icon={faToolbox} />}
          name='Phụ kiện'
        />
        <NavItem
          path={Path.concat(Slugs[7])}
          icon={<FontAwesomeIcon icon={faGamepad} />}
          name='Đồ chơi công nghệ'
        />
        <NavItem
          path={Path.concat(Slugs[8])}
          icon={<FontAwesomeIcon icon={faHandshake} />}
          name='Máy cũ giá rẻ'
        />
        <NavItem
          path={Path.concat(Slugs[9])}
          icon={<FontAwesomeIcon icon={faScrewdriverWrench} />}
          name='Sửa chữa'
        />
        <NavItem
          path={Path.concat(Slugs[10])}
          icon={<FontAwesomeIcon icon={faSimCard} />}
          name='Sim thẻ'
        />
        <NavItem
          path={Path.concat(Slugs[11])}
          icon={<FontAwesomeIcon icon={faNewspaper} />}
          name='Tin tức'
        />
        <NavItem
          path={Path.concat(Slugs[12])}
          icon={<FontAwesomeIcon icon={faFlask} />}
          name='Flash sale'
        />
        <NavItem
          path={Path.concat(Slugs[13])}
          icon={<FontAwesomeIcon icon={faFire} />}
          name='khuyến mãi'
        />
      </section>
    </nav>
  );
};

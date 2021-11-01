import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CartPage from './page/cart';
import ContentDetailPage from './page/content-detail';
import ContentListPage from './page/content-list';
import HomePage from './page/home';
import LoginPage from './page/login';
import OrderCheckPage from './page/order-check';
import RegisterPage from './page/register';
import ErrorPage from './page/error';
import './style/index.scss';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/category/:slug" component={ContentListPage} />
        <Route path="/detail/:slug" component={ContentDetailPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/order-check" component={OrderCheckPage} />
        <Route path="*" component={ErrorPage} />
      </Switch>
    </Router>
  );
};

export default App;

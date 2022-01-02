import { NavLink } from 'react-router-dom';
import {
  faHome,
  faGamepad,
  faChartBar
} from '@fortawesome/free-solid-svg-icons';

import './App.css';
import RoutesPage from './routes/routes';
import FooterItem from './components/Footer_item';

function App() {
  const FooterItemContent = [
    {
      icon: faGamepad,
      path: '/control'
    },
    {
      icon: faHome,
      path: '/home'
    },
    {
      icon: faChartBar,
      path: '/statistic'
    }
  ];

  return (
    <div className='app-container'>
      <div className='app-header'>
      </div>
      <div className='app-body'>
        <RoutesPage />
      </div>
      <div className='app-footer'>
        {
          FooterItemContent.map((item, index) => (
            <NavLink
              to              = {item.path}
              key             = {index}
              activeClassName = 'footer-item--active'
            >
              <FooterItem 
                icon          = {item.icon}
                key           = {index}
              />
            </NavLink>
          ))
        }
      </div>
    </div>
  );
}

export default App;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../App.css';

function FooterItem(props) {
  const { icon } = props;

  return (
    <div className='footer-item' >
      <FontAwesomeIcon icon = {icon} />
    </div>
  );
}

export default FooterItem;
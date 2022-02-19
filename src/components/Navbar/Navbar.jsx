import { Link, useNavigate } from 'react-router-dom';
import { getToken, logout } from '../../service/auth';
import Cookies from 'js-cookie';
import './navbar.scss';

export default function Navbar() {
  const token = getToken();
  const navigate = useNavigate();

  const handleSubmit = () => {
    Cookies.remove('token');
    navigate('/login');
  };

  return (
    <div className='navbar__container'>
      <Link to='/'>
        <h1>Transport Car</h1>
      </Link>
      {token && (
        <button className='logout-btn' onClick={handleSubmit}>
          logout
        </button>
      )}
    </div>
  );
}

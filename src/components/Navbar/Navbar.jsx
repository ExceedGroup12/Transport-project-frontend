import { Link } from 'react-router-dom';
import './navbar.scss';

export default function Navbar() {
  return (
    <div className='navbar__container'>
      <Link to='/'>
        <h1>Transport Car</h1>
      </Link>
    </div>
  );
}

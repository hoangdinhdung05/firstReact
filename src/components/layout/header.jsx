import { NavLink } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <div className="navbar">
      <NavLink to="/" className="nav-link">Home</NavLink>
      <NavLink to="/user" className="nav-link">User</NavLink>
      <NavLink to="/book" className="nav-link">Book</NavLink>
    </div>
  );
};

export default Header;

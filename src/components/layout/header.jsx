import { NavLink } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <div className="navbar">
      <NavLink to="/" className="nav-link" activeClassName="active">Home</NavLink>
      <NavLink to="/user" className="nav-link" activeClassName="active">User</NavLink>
      <NavLink to="/book" className="nav-link" activeClassName="active">Book</NavLink>
    </div>
  );
};

export default Header;

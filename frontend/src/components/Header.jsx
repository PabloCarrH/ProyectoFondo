// src/components/Header.jsx
import { Link } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa";
import '../stylesheets/Header.css';
import Dropdown from 'react-bootstrap/Dropdown';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Fondos.com</div>
      <nav className="nav">
        <Link className="navItem" to="/"> Home </Link>
        <Link className="navItem" to="/contacto">Contacto</Link>
        <Link className="navItem" to="/servicioa">Servicios 
        </Link>
        <div className="navButtons">
        <Link to="/login">
          <button className="btn login-btn">Log In</button>
          </Link>
          <button className="btn get-started-btn">Get Started</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;

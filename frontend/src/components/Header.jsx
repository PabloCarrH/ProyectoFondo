// src/components/Header.jsx
import { Link } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa";
import '../stylesheets/Header.css';
import React, { useEffect, useState } from 'react';

const Header = () => {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      const scrollY = window.scrollY;
      setHidden(scrollY > lastScrollY && scrollY > 100); // Se oculta al bajar y se muestra al subir
      setLastScrollY(scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header className={`header ${hidden ? 'hidden' : ''}`}>
      <div className="logo">Fondos.com</div>
      <nav className="nav">
        <Link className="navItem" to="/"> Home </Link>
        <Link className="navItem" to="/contacto">Contactos</Link>
        <Link className="navItem" to="/servicioa">Servicios</Link>
        <Link className="navItem" to="/documentos">Documentos</Link>
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

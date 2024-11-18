import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import imgmoney from './img/money.jpg'
import Login from './Paginas/login.jsx';
import Dashboard from './Paginas/Dashboard.jsx';
import DashboardU from './Paginas/DasboardU.jsx';
import Contacto from './Paginas/contacto.jsx';
import Documentos from './Paginas/documentos.jsx';
import Corporativo from './Paginas/corporativo.jsx';
import CarrouselInfo from './components/carrouselInfo' 
import { Calendario } from './components/calendario';
import GroupExample from './components/card';
import Footer from './components/footer';
import { FaAngleDown } from "react-icons/fa";
import Emprendedores from './Paginas/emprendedores.jsx';
import ControlSocial from './Paginas/controlsocial.jsx';
const Header = ({ hidden }) => (
  <header className={`header ${hidden ? 'hidden' : ''}`}>
    <div className="logo">Fondos.com</div>
    <nav className="nav">
      <Link className="navItem" to="/">Home</Link>
      <Link className="navItem" to="/contacto">Contacto</Link>
      <Link className="navItem" to="/Corporativo">Corporativo</Link>
      <Link className="navItem" to="/documentos"><FaAngleDown className="icon" />Documentos</Link>
      <Link className="navItem" to="/emprendedores"><FaAngleDown className="icon" />Emprendedores</Link>
      <Link className="navItem" to="/controlsocial"><FaAngleDown className="icon" />Control Social</Link>
      <div className="navButtons">
        <Link to="/login">
          <button className="btn login-btn">Log In</button>
        </Link>
        <button className="btn get-started-btn">Get Started</button>
      </div>
    </nav>
  </header>
);

function Home() {
  return (
    <>
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Proyecto de Fondos</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
          <button className="hero-button">Conocer más</button>
        </div>
        <div className="hero-image">
          <img src={imgmoney} alt="Descripción de la imagen" />
        </div>
      </div>

      

    </section>
    
      </>
  );
}

function App() {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      const scrollY = window.scrollY;
      setHidden(scrollY > lastScrollY && scrollY > 100);
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
    <Router>
      <div className="outer-container">
        <div className="background-container">
          {/* Rutas con Header */}
          <Routes>
            <Route 
              path="/*" 
              element={
                <>
                  <Header hidden={hidden} />
                  <main>
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/emprendedores" element={<Emprendedores />} />
                      <Route path="/documentos" element={<Documentos />} />
                      <Route path="/contacto" element={<Contacto />} />
                      <Route path="/Corporativo" element={<Corporativo />} />
                      <Route path="/controlsocial" element={<ControlSocial />} />
                    </Routes>
                  </main>
                </>
              } 
            />
            {/* Rutas sin Header */}
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboardu" element={<DashboardU />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

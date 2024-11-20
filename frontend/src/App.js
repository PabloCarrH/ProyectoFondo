import React, { useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { ThemeProvider } from "@material-tailwind/react";
import './App.css';
import imgmoney from './img/money.jpg'
import Login from './Paginas/login.jsx';
import Dashboard from './Paginas/Dashboard.jsx';
import DashboardU from './Paginas/DasboardU.jsx';
import Contacto from './Paginas/contacto.jsx';
import Documentos from './Paginas/documentos.jsx';
import Corporativo from './Paginas/corporativo.jsx';
import {Calendario} from './components/calendario';
import Carrusel from './components/carrouselInfo.jsx';
import {FooterWithLogo} from './components/footer.jsx';
import Cards from './components/card'
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
            <p style={{ color: '#073b51' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </p>
            <a href="/contacto">
              <button style={{ color: '#073b51' }} className="hero-button">Conocer más</button>
            </a>
          </div>
          <div className="hero-image">
            <img src={imgmoney} alt="Descripción de la imagen" />
          </div>
        </div>
      </section>
      <div className='titlesCalendar'>
        <h1>¡No te pierdas nuestros eventos!</h1>
        <h4>Aprovecha esta oportunidad de aprendizaje y cononce toso lo que podemos ofrecerte</h4>
      </div>
      <div className='calendar'>
          <div className='carru'>
            <Calendario/>
          </div>
          <div className='cale'>
            <Carrusel/>
          </div>
      </div>
      <div className='titlesCalendar'>
        <h1>¡Somos Garantías!</h1>
        <h4>Nos comprometemos a ofrecerte seguridad y confianza en cada paso.</h4>
      </div>
      <div className='crds'>
        <Cards/>
      </div>
      <div>
        
      </div>
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

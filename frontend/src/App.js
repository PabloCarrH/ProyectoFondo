import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import { FaAngleDown } from "react-icons/fa";
import { Noticias } from './paginas/eventos.jsx';

function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Proyecto de Fondos</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
          <button className="hero-button">Conocer más</button>
        </div>
        <div className="hero-image">
          <img src="./money.jpg" alt="Descripción de la imagen" />
        </div>
      </div>
    </section>
  );
}

function App() {

  return (
    <Router>
      <div className="outer-container">
        <div className="background-container">
          <header className="header">
            <div className="logo">Fondos.com</div>
            <nav className="nav">
              <Link className="navItem" to="/"> Home</Link>
              <Link className="navItem" to="/noticias">Noticias</Link>
              <Link className="navItem" to="/corporativo">Corporativo
              </Link>
              <Link className="navItem" to="/contacto">
                <FaAngleDown className="icon" /> Documentos
              </Link>
              <Link className="navItem" to="/contacto">
                <FaAngleDown className="icon" /> Servicios
              </Link>
              <Link className="navItem" to="/control-social"> Control Social
              </Link>
              <Link className="navItem" to="/emprendedores">
                <FaAngleDown className="icon" /> Emprendedores
              </Link>
              <div className="navButtons">
                <button className="btn login-btn">Log In</button>
                <button className="btn get-started-btn">Get Started</button>
              </div>
            </nav>
          </header>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/noticias" element = {<Noticias/>}/>
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;

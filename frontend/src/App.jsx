// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './paginas/Home';
import Eventos from './paginas/eventos';
import ContactForm from './paginas/formcontact';
import Login from './paginas/login';
import Documentos from './paginas/documentos';
import ControlSocial from './paginas/controlsocial';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div className="background-container">
        <div className="outer-container">
          <Routes>
            <Route
              path="/*"
              element={
                <>
                  <Header />
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contacto" element={<Eventos />} />
                    <Route path="/control-social" element={<ContactForm />} />
                    <Route path="/documentos" element={<Documentos />} />
                    <Route path="/controlsocial" element={<ControlSocial />} />
                  </Routes>
                </>
              }
            />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

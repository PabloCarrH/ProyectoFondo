// src/components/Home.jsx
import React from 'react';
import '../stylesheets/Home.css';
import CarrouselInfo from '../components/carrouselInfo' 
import { Calendario } from '../components/calendario';
import GroupExample from '../components/card';

import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <><section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Proyecto de Fondos</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
          <button className="hero-button">Conocer más</button>
        </div>
        <div className="hero-image">
          <img src="./src/money.jpg" alt="Descripción de la imagen" />
        </div>
      </div>


      
      <div className='Content1'>

      <div className='Cards'>
        <div className=''>
          <GroupExample/>
        </div>
      </div>

      <div className='title'>
        <h2>¡No te pierdas nuestros eventos exclusivos!</h2>
        <h5>Una oportunidad única para conectar, aprender y crecer junto a expertos. ¡Aprovecha al máximo y únete!</h5>
      </div>
      <div className='cal'>
        <CarrouselInfo />
        <Calendario />
        </div>
      </div>

      

      <footer className="footer">
          
      </footer>

   

    </section>
    
      </>

  );
}

export default Home;

import Carousel from 'react-bootstrap/Carousel';
import '../stylesheets/componentes.css';
import '../App.css';


function Carrousel() {


  return (
    <div className='Carrousel'>
    <Carousel
      controls={false}
    >
      <Carousel.Item interval={8000}>
        <div className='CarrouselIContent'>
          <h1>Evento de integración de nuestros clientes</h1>
          <p>Únase a nosotros el viernes, 18 de septiembre de 2024, para un evento ilustrativo sobre la 
            integración de clientes en el sector bancario.</p>
            <br/>
          <p>Descubra cómo las soluciones bancarias innovadoras están dando forma al futuro de los servicios financieros. Participe en discusiones reveladoras, 
            establezca contactos con colegas de la industria y conozca las últimas tendencias en la integración de clientes.</p>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={6000}>
        <div className='CarrouselIContent'>
          <h1>Concierto para Afiliados</h1>
          <br/>
          <p>¡Únase a nosotros el viernes, 18 de septiembre de 2024, para una noche inolvidable de música y conexión en nuestro Concierto Exclusivo para Afiliados!</p>
          <br/>
          <p>Disfrute de un evento vibrante lleno de talento musical, mientras se conecta con otros afiliados y explora nuevas oportunidades para fortalecer sus asociaciones.
          ¡No se pierda esta oportunidad única de disfrutar de buena música y fortalecer sus lazos profesionales en un ambiente lleno de energía y camaradería!</p>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={6000}>
        <div className='CarrouselIContent'>
          <h1>Reunión interna de costos</h1>
          <br/>
          <p>¡Les invitamos a una reunión interna de costos el sábado, 19 de septiembre de 2024!</p>
          <br/>
          <p>Este encuentro es una oportunidad clave para analizar y optimizar nuestros procesos de gestión de costos. Participen en discusiones detalladas sobre estrategias de control, revisen las proyecciones financieras y colaboren con sus colegas para identificar áreas de mejora y eficiencia.
          ¡Esperamos contar con su presencia y aportes para continuar fortaleciendo nuestra gestión de costos!</p>
        </div>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Carrousel;

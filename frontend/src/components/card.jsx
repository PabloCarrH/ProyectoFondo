import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import cardImage1 from '../img/card1.jpg';
import cardImage2 from '../img/calidad.png';
import cardImage3 from '../img/seguridad.png';
import '../Estilos/componentes.css';

function GroupExample() {
  return (
    <CardGroup>
      <Card className="custom-card" style={{ marginLeft: '14%' }}>
        <Card.Img
          variant="top"
          src={cardImage3}
          className="custom-card-img"
        />
        <Card.Body>
          <Card.Title>Seguridad</Card.Title>
          <Card.Text>
            Garantizamos la protección de tus datos y operaciones con altos estándares de seguridad.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="custom-card">
        <Card.Img
          variant="top"
          src={cardImage2}
          className="custom-card-img"
        />
        <Card.Body>
          <Card.Title>Calidad</Card.Title>
          <Card.Text>
            Ofrecemos servicios y productos de excelencia, diseñados para superar tus expectativas.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="custom-card">
        <Card.Img
          variant="top"
          src={cardImage1}
          className="custom-card-img"
        />
        <Card.Body>
          <Card.Title>Ahorro</Card.Title>
          <Card.Text>
            Optimizamos recursos para ofrecerte las mejores soluciones al menor costo posible.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default GroupExample;

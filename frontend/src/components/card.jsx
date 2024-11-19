import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import cardImage from '../img/card1.jpg';
import '../Estilos/componentes.css';

function GroupExample() {
  return (
    <CardGroup>
      <Card className="custom-card" style={{marginLeft: '14%'}}>
        <Card.Img
          variant="top"
          src={cardImage}
          className="custom-card-img"
        />
        <Card.Body>
          <Card.Title>Calidad</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="custom-card">
        <Card.Img
          variant="top"
          src={cardImage}
          className="custom-card-img"
        />
        <Card.Body>
          <Card.Title>Calidad</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="custom-card">
        <Card.Img
          variant="top"
          src={cardImage}
          className="custom-card-img"
        />
        <Card.Body>
          <Card.Title>Ahorro</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default GroupExample;

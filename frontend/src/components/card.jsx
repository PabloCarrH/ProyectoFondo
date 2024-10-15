import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import cardImage from '../img/card1.jpg';


function GroupExample() {
  return (
    <CardGroup>
      <Card style={{
         margin: '3%',
         height: '400px',
         backgroundColor: 'white',
         borderRadius: '25px',
         boxShadow: '0 0 2px  rgb(61, 92, 107)' 
        }}>
      <Card.Img variant="top" src= {cardImage}
      style={{
        padding: '5%',
        width: '250px',
        height: '250px',
        display: 'block',
        margin: '0 auto',
        objectFit: 'cover'
      }}
      />
      <Card.Body>
          <Card.Title>Seguridad</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{
          margin: '3%',
          height: '400px',
          backgroundColor: 'white',
          borderRadius: '25px',
          boxShadow: '0 0 2px  rgb(61, 92, 107)' 
        }}>
       <Card.Img variant="top" src= {cardImage}
      style={{
        padding: '5%',
        width: '250px',
        height: '250px',
        display: 'block',
        margin: '0 auto',
        objectFit: 'cover'
      }}
      />
      <Card.Body>
          <Card.Title>Calidad</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{
          margin: '3%',
          height: '400px',
          backgroundColor: 'white',
          borderRadius: '25px',
          boxShadow: '0 0 2px  rgb(61, 92, 107)' 
        }}>
       <Card.Img variant="top" src= {cardImage}
      style={{
        padding: '5%',
        width: '250px',
        height: '250px',
        display: 'block',
        margin: '0 auto',
        objectFit: 'cover'
      }}
      />
      <Card.Body>
          <Card.Title>Ahorro</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
      </Card>


    </CardGroup>
  );
}

export default GroupExample;
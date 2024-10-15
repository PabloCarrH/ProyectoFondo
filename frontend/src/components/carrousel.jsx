import Carousel from 'react-bootstrap/Carousel';
import '../App.css'; 

function CarrouselInfo() {
  return (
    <Carousel
    style={
      {
        marginLeft: '-7%',
        marginTop: '10%',
        height: '450px',
        width: '85%'
      }
    }
    
    fade controls={false}>
      <Carousel.Item interval={8000}>
        <div>

        </div>
      </Carousel.Item>
      <Carousel.Item interval={8000}>
   
      </Carousel.Item>
    </Carousel>
  );
}

export default CarrouselInfo;

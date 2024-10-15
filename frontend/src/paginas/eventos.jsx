import '../App.css';
import CarrouselInfo from '../components/carrouselInfo' 
import { Calendario } from '../components/calendario';
import 'bootstrap/dist/css/bootstrap.min.css';


function Eventos() {
    return (
      <div className="App">
        <CarrouselInfo/>
        <Calendario />
      </div>
    );
  }

  
 export default Eventos;

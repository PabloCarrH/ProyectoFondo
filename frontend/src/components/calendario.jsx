import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../Estilos/componentes.css';
import '../App.css';
import dayjs from 'dayjs';

export function Calendario() {
  const localizer = dayjsLocalizer(dayjs);

  const myEventsList = [
    {
      start: dayjs('2024-9-18T12:30:00').toDate(),
      end: dayjs('2024-9-18T15:30:00').toDate(),
      title: "Evento de integración a nuestros clientes"
    },
    {
      start: dayjs('2024-9-18T15:30:00').toDate(),
      end: dayjs('2024-9-18T22:30:00').toDate(),
      title: "Concierto"
    },
    {
      start: dayjs('2024-9-19T09:00:00').toDate(),
      end: dayjs('2024-9-19T11:00:00').toDate(),
      title: "Reunión del equipo"
    }
  ];

  const CustomToolbar = (props) => {
    const goToBack = () => props.onNavigate('PREV');
    const goToNext = () => props.onNavigate('NEXT');
    const goToToday = () => props.onNavigate('TODAY');

    const label = () => {
      const date = dayjs(props.date);
      return date.format('MMMM YYYY'); // Mostrar el mes y el año actual
    };

    return (
      <div
        className="rbc-toolbar"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px',
          borderBottom: '1px solid #ddd'
        }}
      >
        {/* Sección izquierda: Mostrar el mes actual */}
        <span
          style={{
            fontSize: '1.5em',
            fontWeight: 'bold',
            color: '#2c3e50',
          }}
        >
          {label()}
        </span>

        {/* Sección derecha: Botones de navegación */}
        <div>
          <button
            style={{
              backgroundColor: '#3498db',
              color: '#fff',
              borderRadius: '5px',
              border: 'none',
              padding: '8px 12px',
              marginRight: '5px',
            }}
            onClick={goToBack}
          >
            Anterior
          </button>
          <button
            style={{
              backgroundColor: '#3498db',
              color: '#fff',
              borderRadius: '5px',
              border: 'none',
              padding: '8px 12px',
              marginRight: '5px',
            }}
            onClick={goToToday}
          >
            Hoy
          </button>
          <button
            style={{
              backgroundColor: '#3498db',
              color: '#fff',
              borderRadius: '5px',
              border: 'none',
              padding: '8px 12px',
            }}
            onClick={goToNext}
          >
            Siguiente
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className='Calendario' >
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        components={{
          toolbar: CustomToolbar, // Sobrescribir la barra de herramientas
        }}
        style={{ height: 520, padding: '10px'}}
      />
    </div>
  );
}

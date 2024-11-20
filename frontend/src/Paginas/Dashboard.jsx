import React, { useEffect, useRef, useState } from 'react';
import '../Estilos/estilosdashboard.css'; 
import logo from '../img/logoFinanza.jpg';
import user from '../img/usuario.png';
import Reportes from '../components/reportes'
import Gestion from '../components/gestion'
import Estadistica from '../components/graficos'
import Solicitudes from '../components/solicitudes'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMoneyBillTrendUp, faCommentDots, faBug, faBell, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
    const [seccionActual, setSeccionActual] = useState('Estadistica'); // Nuevo estado para manejar la sección
    const cloudRef = useRef(null);
    const barraLateralRef = useRef(null);
    const mainRef = useRef(null);

    useEffect(() => {
        const cloud = cloudRef.current;
        const barraLateral = barraLateralRef.current;
        const main = mainRef.current;

        const toggleClasses = () => {
            barraLateral.classList.toggle("mini-barra-lateral");
            main.classList.toggle("min-main");
        };

        if (cloud) {
            cloud.addEventListener("click", toggleClasses);
        }

        return () => {
            if (cloud) {
                cloud.removeEventListener("click", toggleClasses);
            }
        };
    }, []);

  

    return (
        <div className="dashboardUsuario" id="dashboardPanel">
            <div className="barra-lateral" ref={barraLateralRef}>
                <div className="nombre-pagina">
                    <img src={logo} ref={cloudRef} alt="Logo" />
                    <span>Fondos</span>
                </div>
                <hr />
                <nav className="navegacion">
                    <ul>
                        <li id="gestion" onClick={() => setSeccionActual('gestion')}>
                            <a href="#">
                                <i><FontAwesomeIcon icon={faUser} className="fa-xl" /></i>
                                <span>Gestión</span>
                            </a>
                        </li>
                        <li id="Solicitudes" onClick={() => setSeccionActual('solicitudes')}>
                            <a href="#">
                                <i><FontAwesomeIcon icon={faCommentDots} className="fa-xl" /></i>
                                <span>Solicitudes</span>
                            </a>
                        </li>
                        <li id="Reportes" onClick={() => setSeccionActual('reportes')}>
                            <a href="#">
                                <i><FontAwesomeIcon icon={faBug} className="fa-xl" /></i>
                                <span>Reportes</span>
                            </a>
                        </li>
                        <li id="Salir" onClick={() => setSeccionActual('Salir')}>
                            <a href="../login">
                                <i><FontAwesomeIcon icon={faArrowAltCircleLeft} className="fa-xl" /></i>
                                <span>Salir</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <hr />
                <div className="usuario">
                    <img src={user} alt="Usuario" />
                    <span>Bienvenido Admin</span>
                </div>
            </div>
            <main className='dash' id="mainDashboard" ref={mainRef}>
                <div className="encabezado">
                    {seccionActual === 'Estadistica' && <h2 id="tituloDahsboard">Estadistica</h2>}
                    {seccionActual === 'gestion' && <h2 id="tituloDahsboard">Gestión de Usuarios</h2>}
                    {seccionActual === 'solicitudes' && <h2 id="tituloDahsboard">Solicitudes</h2>}
                    {seccionActual === 'reportes' && <h2 id="tituloDahsboard">Reportes</h2>}
                </div>
                {seccionActual === 'Estadistica' && (
                    <Estadistica/>
                )}
                {seccionActual === 'solicitudes' && (
                    <Solicitudes/>
                )}
                {seccionActual === 'reportes' && (
                    <Reportes/>
                )}
                {seccionActual === 'gestion' && (
                    <Gestion/>
                )}
            </main>
        </div>
    );
};

export default Dashboard;

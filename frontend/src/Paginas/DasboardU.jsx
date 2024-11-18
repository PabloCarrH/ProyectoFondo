import React, { useEffect, useRef, useState } from 'react';
import '../Estilos/estilosdashboardUsuario.css'; 
import logo from '../img/logoFinanza.jpg';
import user from '../img/usuario.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMoneyBillTrendUp, faCommentDots, faBug, faBell, faArrowAltCircleLeft,faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
    const [seccionActual, setSeccionActual] = useState('dashboard'); // Nuevo estado para manejar la sección
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
        <div className="dashboardUsuario">
            <div className="barra-lateral" id="barraUsuario" ref={barraLateralRef}>
                <div className="nombre-pagina">
                    <img src={logo} ref={cloudRef} alt="Logo" />
                    <span>Fondos</span>
                </div>
                <hr />
                <nav className="navegacion">
                    <ul>
                        <li id="perfil" onClick={() => setSeccionActual('perfil')}>
                            <a href="#">
                                <i><FontAwesomeIcon icon={faUser} className="fa-xl" /></i>
                                <span>Perfil</span>
                            </a>
                        </li>
                        <li id="Cuenta" onClick={() => setSeccionActual('Cuenta')}>
                            <a href="#">
                                <i><FontAwesomeIcon icon={faMoneyBillTrendUp} className="fa-xl" /></i>
                                <span>Cuenta</span>
                            </a>
                        </li>
                        <li id="Pagos" onClick={() => setSeccionActual('Pagos')}>
                            <a href="#">
                                <i><FontAwesomeIcon icon={faFileInvoiceDollar} className="fa-xl" /></i>
                                <span>Pagos</span>
                            </a>
                        </li>
                        
                        <li id="Salir" onClick={() => setSeccionActual('Salir')}>
                            <a href="#">
                                <i><FontAwesomeIcon icon={faArrowAltCircleLeft} className="fa-xl" /></i>
                                <span>Salir</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <hr />
                <div className="usuario">
                    <img src={user} alt="Usuario" />
                    <span>Bienvenido Usuario</span>
                </div>
            </div>
            <main ref={mainRef} id="mainDashboard" className='dash'>
                <div className="encabezado">
                    {seccionActual === 'perfil' && <h2 id="tituloDahsboard">Perfil</h2>}
                    {seccionActual === 'Cuenta' && <h2 id="tituloDahsboard">Cuenta</h2>}
                    {seccionActual === 'Pagos' && <h2 id="tituloDahsboard">Pagos</h2>}
                    {seccionActual === 'dashboard' && <h2 id="tituloDahsboard">Dashboard</h2>}
                </div>

                {seccionActual === 'perfil' && (
                    <div id="PrincipalCuenta">
                        <div id="CuentasCajaArriba">
                            <div id="UsuarioPerfil">
                                <img src={user} alt="Usuario" />
                                <p>Santiago@gmail.com</p>
                            </div>
                            <div id="AfiliacionPerfil">
                                <p>Cambiar Afilicion</p>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Seleccione uno</option>
                                    <option value="1">Premium</option>
                                    <option value="2">Platino</option>
                                    <option value="3">Normal</option>
                                </select>
                            </div>
                            <div id="CambiarContraseña" data-bs-target="#exampleModal">
                                <p>Cambiar contraseña</p>
                                
                            </div>
                        </div>

                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    ...
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                )}

                {seccionActual === 'Cuenta' && (
                    <div id="PrincipalCuenta">
                        <div id="CuentasCajaArriba">
                            <div id="IngresosCuenta">
                                <p>Deposito</p>
                                <p>1'000.000.00$</p>
                            </div>
                            <div id="EstadoCuentaActual">
                                <p>Estado de cuenta</p>
                                <p>En mora</p>
                            </div>
                        </div>
                        <div id="HistorialPagos">
                            <center>Historial</center>
                            <table>
                                <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Precio</th>
                                    <th>Fecha</th>
                                </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>  
                                        <td>Recibo del Agua</td> 
                                        <td>120.000.00$</td>
                                        <td>21/10/2024</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                )}
            </main>
        </div>
    );
};

export default Dashboard;

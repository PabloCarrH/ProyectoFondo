
# Proyecto Fondo de Empleados

Este proyecto consiste en un sitio web dedicado a la administración de un fondo de empleados.Incluye un módulo de usuarios y un módulo administrativo, el módulo administrativo permite visualizar estadísticas, generar reportes e información detallada de los afiliados registrados en el sistema. Adicionalmente proporciona la funcionalidad de generar reportes en Excel sobre costos y otros datos almacenados en la base de datos.

## Estructura del Proyecto

### Módulo Administrativo

Estadísticas: Visualización de gráficos interactivos sobre ventas, costos, y crecimiento del fondo.
Reportes: Generación de archivos Excel con datos relevantes mediante botones de descarga.
Gestión de Afiliados: Visualización y edición de información de los afiliados, como estado de pagos, cuotas mensuales y montos de afiliación.

### Módulo de Usuarios

Registro e Inicio de Sesión: Permite a los usuarios registrarse y acceder al dashboard personalizado.
Panel de Usuario: Incluye herramientas para la consulta de información personal y estado de afiliación.
Instalación y Configuración

## Configuración del Servidor
Asegúrarse de iniciar el servidor antes de ejecutar el frontend.
node server.js

## Inicio del Frontend
Ejecuta el siguiente comando para iniciar la interfaz del usuario:
npm start

# Dependencias

### Frontend
Ejecutar los siguientes comandos para instalar las dependencias necesarias:

npm install react-big-calendar
npm install dayjs
npm install react-bootstrap bootstrap
npm install mdb-react-ui-kit
npm install @fortawesome/fontawesome-free
npm install --save @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
npm install firebase
npm install react-router-dom
npm install react-icons

### Backend

Instala la dependencia para generar reportes en Excel:
npm install exceljs

## Módulo de Inicio de Sesión
Registrar un Usuario
Accede al formulario de registro para crear un nuevo usuario en el sistema.

## Iniciar Sesión
Una vez registrado, utiliza las credenciales creadas para acceder al dashboard de usuario.
En caso de pruebas, puedes regresar a la página principal y probar la funcionalidad de inicio de sesión.

## Funcionalidades Clave

Dashboard Responsivo: Diseñado con Material UI y compatible con dispositivos móviles.
Generación de Reportes en Excel: Exporta datos relevantes con un solo clic.
Visualización de Estadísticas: Gráficos dinámicos para entender el desempeño del fondo.
Gestión de Afiliados: Mantén la información organizada y actualizada.

## Tecnologías Utilizadas
Frontend: React.js, React-Big-Calendar, Bootstrap, MDB React UI Kit.
Backend: Node.js, ExcelJS.
Base de Datos: MySQL.


Con este proyecto, se busca ofrecer una solución integral y eficiente para la administración de fondos de empleados, optimizando el manejo de datos y mejorando la experiencia de los usuarios y administradores.
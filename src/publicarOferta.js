import './css/reclutamiento.css';
import imgReclutador from './img/ReclutadorIMGV2.jpg';

function PublicarOferta() {
    return(
        <div>
            <div className="WelcomeMessage">
        <div className="WelcomemessageBox">
            <h1>BIENVENIDO A NUESTRO SISTEMA DE RECLUTAMIENDO</h1>
            <p>encuentra tus proximos empleados mas rapido</p>
            <button>Publicar empleo</button>
        </div>
        <img src={imgReclutador} alt="" className="ReclutadorIMG"/>
    </div>  
    <div className="WelcomeMessage2">
        <h1>Ahorre tiempo y energía en el proceso de contratación.</h1>
        <p>Encontrar a la persona indicada para el empleo no debería consumir todo su tiempo. Las herramientas sencillas y poderosas de Job´s Aid le permiten buscar, seleccionar y contratar más rápido.</p>
    </div>
    <div className="List">
        <ul>
            <li>
                <h1>Cree una cuenta gratis</h1>
                <p>Solo necesita su dirección de email para crear una cuenta y comenzar a darle forma a su publicación de empleo.</p>
            </li>

            <li>
                <h1>Cree su publicación de empleo</h1>
                <p>Luego agregue el título, la descripción y la ubicación de su publicación de empleo, ¡y listo!</p>
            </li>

            <li>
                <h1>Publique su empleo</h1>
                <p>Luego de publicar el empleo, use nuestras herramientas de última generación para encontrar a los mejores talentos.</p>
            </li>
        </ul>
    </div>

    <div className="Begin">
        <h1>¡Comience en solo un Click!</h1>
        <button> Publicar empleo</button>
    </div>


        </div>
    )
}

export default PublicarOferta;


import LogoV3 from './img/Logoemployeed_V2.png'
import './css/loginEmployeed.css'
import { useForm } from 'react-hook-form';


function Login() {

    const {register, handleSubmit, formState: { errors } } = useForm();

    const LoginUSer = (data) =>{
        
            console.log(data)
            
            const requestInit = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            }
               
        
                fetch(`http://localhost:9000/api/sesionemployeed`, requestInit)
                .then(res => res.json())
                .then(res =>  {
                    if (res != '') {
                        const dates = {
                            nombre: res[0].nombreusuario,
                            id: res[0].idEmpresa
                        }
                        localStorage.setItem('loggedUsersEmployeed', JSON.stringify(dates))
                        window.location.href = "http://localhost:3000/perfil/Publishofert";
                    }else{
                        alert('la contraseña o usuario son incorrectos');
                        console.log('es undefinido')
                    }
                })
                
                
              
    }



    return(
        
        <>
            <div className="contenedor">
                <div className="contenedor2">
                    <a href="Reclutamiento.php"><div className="boxLogo"><img src={LogoV3} alt="" className="imgLogo"/> </div></a>
                </div>

                <div className="formLoginEmployeed" id="">
                    <form onSubmit={handleSubmit(LoginUSer)} className="formulario2Employyed">
                        <h1>Bienvenido</h1>
                        <label for="">Correo electronico empresa</label>
                        <input
                            className="form-control mb-2"
                            placeholder="introducir Correo"
                            type="text"
                            {...register('EmailEmployeed')}
                        />
                            <label for="">Contraseña</label>
                            <input
                                className="form-control mb-2"
                                placeholder="Introducir la contraseña"
                                type="text"
                               {...register('PasswordEmployeed')}
                            />

                                <div className="buttons" id="">

                                    <a href="formEmpresa.php"
                                        className="btn btn-primary"
                                        placeholder=""
                                        type="submit"
                                        id=""
                                        name=""

                                    >Nueva empresa</a>

                                    <input
                                        className="btn btn-primary"
                                        placeholder=""
                                        type="submit"
                                        id="btn_inicio_s"
                                        name="btn_inicio_s"
                                        value="inicar Sesion"
                                    />
                                </div>
                            </form>
                        </div>
                </div>  

        </>
    )
}

export default Login;
import './css/profile.css';



function PerfilEmployeed(params) {

    const ExitUser = () =>{
        localStorage.removeItem('loggedUsersEmployeed')
        window.location.href = 'http://localhost:3000'
    }
    return(
        <>
            

            <div className="general_container">


                <div className="" id="navega">
                    <div className="navUsuario">
                        <ul>
                            <li><a href="/perfil/useremployeed" id="applications">Perfil</a></li>

                            <li><a href="/perfil/Publishofert" id="applications">Publicar Empleo</a></li>
                            <li><a href="/perfil/postulations" id="emailBox">Vacantes</a></li>
                            <li><a href="/perfil/searchcv" id="settings">Buscar CV</a></li>
                            <li><a href="/Perfil/interviews" id="cv">Entrevistas</a></li>
                            <li onClick={ExitUser}><a id="cv">Salir</a></li>
                        </ul>
                    </div>
                </div>

                {/* <div className="perfil" id="perfil">
                    <div className="formularioPerfil">
                        {
                            userData.map(lista => <img src={lista.foto} key={lista.Id_usuario} className="imgPerfil2" alt="foto perfil" />
                            )
                        }

                        <h2></h2>
                        <input type="file" id="fileinput" onChange={selectedHandler} name="upPicture" />
                        <br />
                        <button onClick={sendHandler} className="btn btn-primary " id="btnPerfil">cambiar foto de perfil</button>

                    </div>
                </div> */}


                <div className="containerprofile" id="containerprofile">


                </div>



                <footer className="" id="footers2">

                </footer>

            </div>    
        
        </>
    )
}
export default PerfilEmployeed;
import React, { useState, useEffect } from "react";
import '../css/user.css';


function UserEmployeed() {

    const [userinfo, setUserinfo] = useState([])

    
    useEffect(() =>{
        const localUserState = localStorage.getItem("loggedUsersEmployeed")
        const user = JSON.parse(localUserState)
        
        //  console.log(user.id)
        
            const datesUser = () =>{
                fetch(`http://localhost:9000/api/useremployeed/${user.id}`)
                .then(res => res.json())
                .then(res => setUserinfo(res))
            }
           datesUser()
           
           
             
        }, [])

        const [File, setFile] = useState([])

        const sendHandler = () =>{
    
            if (!File) {
                alert('debes cargar algun archivo')
                return
            }else{
    
                const localUserState = localStorage.getItem("loggedUsersform")
                const user = JSON.parse(localUserState)
    
                const formdata = new FormData()
                formdata.append('image', File)
        
                const requestInit = {
                    method: 'POST',
                    body: formdata
                }
        
                    fetch(`http://localhost:9000/api/image/post/${user.Id_usuario}`, requestInit)
                    .then(res => res.text())
                    .then(res => console.log(res)) 
                    .catch(err => {
                        console.log(err)
                    })
        
                    document.getElementById('fileinput').value = null
        
                    setFile(null)
            }
        }
        
        const selectedHandler = () =>{

        }

        const [Editimg, setEditimg] = useState(false)

        const changePicture = () =>{
            setEditimg(true)
            console.log("Hola")
        }

        const [EditInfo, setEditInfo] = useState(false)

        const changeInfo = () =>{
            setEditInfo(true)
            console.log("Hola")
        }

    return(
        <>

            <div className="general-container-perfiluser">
                <div>
                    <h3>Perfil</h3>
                    <hr></hr>
                </div>

                {
                    userinfo.map(Lista => (
                        <div className="InfoPerfilBox" key={Lista.idEmpresa}>
                           <h2>Informacion Empresa</h2>
                            <div>
                            {Editimg ?  

                            <div>
                            <img className="imgPerfil" src={Lista.foto} alt="" />   
                            <input type="file" id="fileinput" onChange={selectedHandler} name="upPicture"/>
                            <button onClick={sendHandler} className="btn btn-primary " id="btnPerfil">Hecho</button>
                            </div>

                            : 
                            <div className="box-img-perfil">
                                <div className="box-img-perfil-title">
                                <h3 className="titulo-box-img">.</h3> 
                                <button className="btn btn-primary btnEdit" onClick={changePicture}>✎</button>
                                </div>
                              
                            <img className="imgPerfil" src={Lista.foto} alt="" />
                            
                            </div>    
                            }    
                            </div>


                            <div>
                                {
                                    EditInfo ? 
                                    
                                        <div className="EditDates-perfil">

                                            <h3>Editar datos </h3>
                                            <form>
                                                <label>Nombre de Empresa</label>
                                                <input className="form-control mb-2" placeholder={Lista.nombreempresa} />

                                                <label>Nombre de Usuario</label>
                                                <input className="form-control mb-2" placeholder={Lista.nombreusuario} />

                                                <label>Correo</label>
                                                <input className="form-control mb-2" placeholder={Lista.CorreoEmpresa} />

                                                <label>Nit</label>
                                                <input className="form-control mb-2" placeholder={Lista.nit} />

                                                <label>Telefono</label>
                                                <input className="form-control mb-2" placeholder={Lista.numerotelefono} />

                                                <button className="btn btn-primary">Editar</button>
                                            </form>

                                        </div>
                        
                                    :
                                      
                                        <div className="box-dates-perfil">
                                            <div className="box-dates-perfil-title">
                                            <h3>.</h3>
                                            <button className="btn btn-primary " onClick={changeInfo}>✎</button>
                                            </div>
                                            <h1 className="font-weight-bold">{Lista.nombreempresa}</h1>
                                            <p>{Lista.nombreusuario}</p>
                                            <p>Nit: {Lista.nit}</p>
                                            <p>Cundinamarca</p>


                                           
                                            <p>{Lista.CorreoEmpresa}</p>
                                        </div>
                                }
                              
                            </div>

                  

                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default UserEmployeed;
import React,{useState, useEffect} from "react";
import '../css/candidates.css'



function Candidates() {

    const [applys, setApplys] = useState([])


    useEffect(() =>{
        const getofert = () =>{
            const localUserState = localStorage.getItem("loggedUsersEmployeed")
            const user = JSON.parse(localUserState)
            fetch(`http://localhost:9000/api/ofertsjobs/get/${user.id}`)
            .then(res => res.json())
            .then(res => setApplys(res))
            // console.log('hola me estoy ejecutando primeor')
            
           }
           getofert()
    },[])

    const deleteOfert = (idOfert) =>{
        var resultado = window.confirm('Estas seguro?');
        if (resultado === true) {
            fetch(`http://localhost:9000/api/delete/ofert/${idOfert}`)
            .then(res => res.json())
            .then(res => {JSON.stringify(res)
            alert(res)})
        } 
   
    }

    const [applicants, setApplicants] = useState([]);
    const [showapplicants, setshowApplicants] = useState(false);
    
    const seeapplicants = (idOferta) =>{
        fetch(`http://localhost:9000/api/applicants/get/${idOferta}`)
        .then(res => res.json())
        .then(res => {
            setApplicants(res)
            setshowApplicants(true)
        })

        console.log(applicants)
    }

    return(
        <>
               
           

            <div className="containerprincipal">
                <div className="tittle-vacantes">
                    <h3>Vacantes</h3>
                    <hr></hr>
                </div>
                <div className="containers-general-and-members">


                    <div className="constainerGeneralJobs">
                        <h3> Ofertas publicadas</h3>
                        {applys.map(apply => (
                            <div>

                                <div className="containerJobs">
                                    <div className="buttonsJobs">
                                        <button className="btn btn-danger" onClick={() => { deleteOfert(apply.id_vacante) }}>Eliminar</button>
                                        <button className="btn btn-success">actualizar</button>
                                        <button className="btn btn-info" onClick={() => { seeapplicants(apply.id_vacante) }}>ver postulados</button>
                                    </div>

                                    <h4>{apply.titulo_vacante}</h4>
                                    <p>{apply.LugarEmpleo}</p>
                                    <p>{apply.descripcion_vacante}...</p>

                                </div>
                            </div>
                        )
                        )}
                    </div>




                    {showapplicants ?
                        <div className="containerGeneralMembers">
                            <h3>Postulados</h3>
                            {applicants.map(lista =>






                                <div className="containerMembers">

                                    <h4 className="h4">{lista.titulo_vacante}</h4>

                                    <p className="font-weight-bold"></p>
                                    <p>{lista.nombre}</p>

                                    <p>{lista.apellido}</p>
                                    <p>{lista.correo}</p>
                                    <p>{lista.telefono}</p>
                                    <p>{lista.profesion}</p>


                                    {/* <button
                            onClick={actionApply}
                            className="btn btn-primary" id="postularse" type="submit">Postularse al empleo</button> */}

                                </div>





                            )}
                        </div>

                        : ""}
                </div>
            </div>

                    
        </>
    )
}

export default Candidates;
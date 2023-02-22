import '../css/interview.css'
import React,{useState, useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid';

function Interviews() {

    const {register, handleSubmit, formState: { errors } } = useForm();

    const [listinterv , SetlistaEntrevistas] = useState([]);

    useEffect(() =>{
        
        
         
        
            const datesUser = () =>{
                const localUserState = localStorage.getItem("loggedUsersEmployeed")
                const user = JSON.parse(localUserState)

                fetch(`http://localhost:9000/api/get/interviews/${user.id}`)
                .then(res => res.json())
                .then(res => SetlistaEntrevistas(JSON.parse(res[0].listaEntrevistas)))
            }
           datesUser()
           
          
             
        }, [])

        
    const formNewInterview = (data) =>{
        data.idI = uuidv4()
       
        const localUserState = localStorage.getItem("loggedUsersEmployeed")
        const user = JSON.parse(localUserState)
        
        const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }
           
    
            fetch(`http://localhost:9000/api/post/interviews/${user.id}/new`, requestInit)
            .then(res => res.json())
            .then(res => SetlistaEntrevistas(res))
            

    }
    
    
    const deleteInterview = (idinterview) =>{
        const localUserState = localStorage.getItem("loggedUsersEmployeed")
        const user = JSON.parse(localUserState)

        const idl = {
            idI: idinterview
        }
        const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(idl)
        }
        fetch(`http://localhost:9000/api/delete/interviews/${user.id}`, requestInit)
        .then(res => res.json())
        .then(res => SetlistaEntrevistas(res))
    }

    return(
        <>
            <div className='container-principal'>
                <div>
                    <h3>Entrevistas</h3>
                    <hr></hr>
                </div>
                <div className='container-boxes'>
                    <div className='box1'>
                        <p>entrevistas sin completar</p>
                        <h1>0</h1>
                    </div>
                    <div className='box2'>
                        <p>entrevistas completadas</p>
                        <h1>{listinterv.length}</h1>
                    </div>
                </div>

                <div className="container-general">

                    <div className="container-interviews">
                        <h3 className='tittle-list-interviews'>Lista de Entrevistas</h3>
                        {
                            listinterv.map(list => (
                                <div className='container-lista-interviews' key={list.idI}>
                                    <p>{list.nombreEntrevista}</p>
                                    <p>{list.fechaEntrevista}</p>
                                    <div className='btndelete'>
                                        <button className='btn btn-primary mb-3'onClick={() =>{deleteInterview(list.idI)}}>🗑</button>
                                        <button className='btn btn-primary mb-3'>✓</button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    <div className="container-new-interview">
                        <form onSubmit={handleSubmit(formNewInterview)}>
                            <p>Agregar nueva Entrevista</p>
                          
                            <input
                                type="text"
                                placeholder='Entrevista de...'
                                {...register('nombreEntrevista')}

                            />
                            <input
                                type="date"
                                name="birthday"
                                {...register('fechaEntrevista')}
                            />
                            <button className="btn btn-primary mb-3">Agregar Entrevista</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Interviews;
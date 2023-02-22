import React,{useState} from 'react';
import {useForm} from 'react-hook-form'
import '../css/searchCV.css'

function SearchCV() {

    const [usercv, setUsercv] = useState([]);

    const {register, handleSubmit} = useForm();

    const formSearch = (data) =>{
        const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }
        fetch('http://localhost:9000/api/get/userscv', requestInit)
        .then(res => res.json())
        .then(res => setUsercv(res))
    }

    

    return(
        <>
        <div className='generalcontainer'>
            <div>
                <h3>Buscar Candidatos</h3>
                <hr></hr>
            </div>
            <div className='formsearch'>
                <form onSubmit={handleSubmit(formSearch)}>
                <input
                    className='form-control mb-2'
                    type="text"
                    placeholder="Profesion"
                    {...register('profesion')}
                    ></input>

                <input
                    className='form-control mb-2'
                    type="text"
                    placeholder="Cuidad o depratamento"
                    {...register('ciudad')}
                    ></input>
                <button type="submit" className='btn btn-primary'>Buscar</button>
                </form>
            </div>

            <div className='resultsearch'>
            <h3 className='tittle-searched'>Perfiles encontrados</h3>
                {usercv.map(list => (
                    <div className='userscvsearched'>
                        
                        
                        
                        <p>{list.nombre}</p>
                        <p>{list.apellido}</p>
                        <p>{list.correo}</p>
                        <p>{list.telefono}</p>
                        <p>{list.ciudad}</p>
                        <p>{list.profesion}</p>
                        

                    </div>
                
                ))}
            </div>
        </div>
        </>
    )
}

export default SearchCV;
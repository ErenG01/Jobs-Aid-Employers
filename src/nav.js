import React, {useState} from 'react';
import logo2 from './img/Logo_V2.png'
import  './css/nav.css'


function Nav() {

    const [userAccess, setUserAccess] = useState(false)

    const [userlogged, setUserLogged] = useState([])

    useState(()=>{
        const validateLocalUser = localStorage.getItem('loggedUsersEmployeed')

        if (validateLocalUser != null) {
            const user = JSON.parse(validateLocalUser)
            console.log(user.id)
            fetch(`http://localhost:9000/api/useremployeed/${user.id}`)
            .then(res => res.json())
            .then(res => setUserLogged(res))
            
            setUserAccess(true)
        }else{
            setUserAccess(false)
        }
    },[])

    
    return(
        <>
        {userAccess ?
        
        <nav className='navEmployeed'>
            <div className='navegadoremployeed'>
                <ul >
                    <a href="/perfil/user"><img className='imagenlogo' src={logo2} alt="Logo Jobs Aid Employers" /></a>
                    {userlogged.map(lista =>(
                    <div className='UserLogged' key={lista.idEmpresa}>
                        <p>{lista.nombreempresa}</p>
                        <p>{lista.nombreusuario}</p>
                        <p>{lista.CorreoEmpresa}</p>
                    {/* <a href="/perfil/Publishofert"><li>Publicar empleo</li></a>
                    <a href="/perfil/searchcv"><li>Encontrar candidatos</li></a> */}

                    </div>
                    ))}
                    
                    
                </ul>
            </div>
        </nav>
        
        
        
        :
        <nav className='navEmployeed'>
            <ul className='ulemployeed'>
                <a href="http://localhost:3000/"><img src={logo2} alt="Logo Jobs Aid Employers" /></a>
                <a href="/perfil/Publishofert"><li>Publicar empleo</li></a>
                <a href="/perfil/searchcv"><li>Encontrar candidatos</li></a>
                <a href="/"><li>Crear empresa</li></a>
                <a href="/Login"><li>ingresar</li></a>
            </ul>
        </nav>
        }
        
        </>
    )
}

export default Nav;
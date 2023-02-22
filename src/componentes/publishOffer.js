import { useState } from 'react';
import { useForm } from 'react-hook-form';
import '../css/publishofert.css'

function PublishOfert(params) {

    const {register, handleSubmit, formState: { errors } } = useForm();

    let max = 4;
    // let current = 1;

    const [current, setCurrent] = useState(1)

    let steps = -100;
    const [contador, setcontador] = useState(-100)
    const sliderMove = (e) =>{
        setcontador(contador + -100)
        setcontador2(steps)

        const slider = document.querySelector(".form-publicar")
        slider.style.marginLeft = `${contador}%`;

        // PARTE DEL LA BARRA DE PROGRESO

        const pregressText = document.querySelectorAll(".step p")
        const pregressCheck = document.querySelectorAll(".step .check")
        const bullet = document.querySelectorAll(".step .bullet")

        pregressText[current - 1].classList.add("active");
        bullet[current - 1].classList.add("active");
        pregressCheck[current - 1].classList.add("active");
        
        setCurrent(current + 1)

        console.log(contador+"contador1")
        console.log(contador2+ "contador2")
        e.preventDefault()
      
    }

    
    const [contador2, setcontador2] = useState(100)

    const sliderMoveBack = (e) =>{
        setcontador2(contador2 + 100)
        setcontador(-100)

        const slider2 = document.querySelector(".form-publicar")
        slider2.style.marginLeft = `${contador2}%`

        // PARTE DE LA BARRA DE PROGRESO

        const pregressText = document.querySelectorAll(".step p")
        const pregressCheck = document.querySelectorAll(".step .check")
        const bullet = document.querySelectorAll(".step .bullet")

        pregressText[current - 2].classList.remove("active");
        bullet[current - 2].classList.remove("active");
        pregressCheck[current - 2].classList.remove("active");
        
        setCurrent(current - 1)

        console.log(contador+"contador1")
        console.log(contador2+ "contador2")
      e.preventDefault()
    }

    return(
        <>
            <div className="FormularioPublicarEmpleo">
                <div className='bar-progress'>
                    <div className='step'>
                        <p>name</p>
                        <div className='bullet'>
                            <span>1</span>
                        </div>
                        <div className='check fas fa-check'></div>
                    </div>
                    <div className='step'>
                        <p>Contact</p>
                        <div className='bullet'>
                            <span>2</span>
                        </div>
                        <div className='check fas fa-check'></div>
                    </div>
                    <div className='step'>
                        <p>Birth</p>
                        <div className='bullet'>
                            <span>3</span>
                        </div>
                        <div className='check fas fa-check'></div>
                    </div>
                    <div className='step'>
                        <p>sbmit</p>
                        <div className='bullet'>
                            <span>4</span>
                        </div>
                        <div className='check fas fa-check'></div>
                    </div>
                </div>
                <form className='form-publicar'>
                    <div className='boxgeneral-steps'>
                        <div className='container1'>
                            <h1>Publica Tu Anuncio</h1>
                            <label>A que industria pertenece tu empresa</label>

                            <input
                                className="form-control mb-2"
                                type="text"
                                placeholder="industria"

                            ></input>

                            <label>Titulo de la vacante</label>
                            <input
                                className="form-control mb-2"
                                type="text"
                                placeholder="titulo Vacante"

                            ></input>
                            <label>Lugar de empleo</label>
                            <select {...register('city')} className="form-control mt-2" >

                                <option value="Cuidad"></option>
                                <option value="Amazonas">Amazonas</option>
                                <option value="Antioquia">Antioquia</option>
                                <option value="Arauca">Arauca</option>
                                <option value="Archipielago de san Andres">Archipielago de san Andres</option>
                                <option value="Atlantico">Atlantico</option>
                                <option value="Bogota D.C">Bogota D.C</option>
                                <option value="Bolivar">Bolivar</option>
                                <option value="Boyacá">Boyacá</option>
                                <option value="Caldas">Caldas</option>
                                <option value="Caquetá">Caquetá</option>
                                <option value="Casanare">Casanare</option>
                                <option value="Cauca">Cauca</option>
                                <option value="Cesar">Cesar</option>
                                <option value="Chocó">Chocó</option>
                                <option value="Córdoba">Córdoba</option>
                                <option value="Cundinamarca">Cundinamarca</option>
                                <option value="Guainía">Guainía</option>
                                <option value="Guaviare">Guaviare</option>
                                <option value="Huila">Huila</option>
                                <option value="La Guajira">La Guajira</option>
                                <option value="Magdalena">Magdalena</option>
                                <option value="Nariño">Nariño</option>
                                <option value="Norte de Santander">Norte de Santander</option>
                                <option value="Putumayo">Putumayo</option>
                                <option value="Quindío">Quindío</option>
                                <option value="Sucre">Sucre</option>
                                <option value="Tolima">Tolima</option>
                                <option value="Valle del Cauca">Valle del Cauca</option>
                                <option value="Vaupés">Vaupés</option>
                                <option value="Vichada">Vichada</option>

                            </select>
                            <button className='btn btn-primary btncontinue' onClick={sliderMove}>continuar</button>
                        </div>


                        <div className='container2'>
                            <h1>Especificaciones del empleo</h1>
                            <label>¿Cuantas personas deseas contratar para esta vacante?</label>
                            <input
                                className="form-control mb-2"
                                type="text"
                                placeholder="numeor de vacantes"

                            ></input>

                            <label>Agrega Remuneracion</label>
                            <input
                                className="form-control mb-2"
                                type="text"
                                placeholder="Sueldo"

                            ></input>
                            <label>Tiempo de Pago</label>
                            <select {...register('typejob')} className="form-control mt-2" >

                                <option value=""></option>
                                <option value="tiempo Completo">tiempo Completo</option>
                                <option value="Indefinido">Indefinido</option>
                                <option value="Medio Tiempo">Medio Tiempo</option>
                                <option value="Temporal">Temporal</option>
                                <option value="Contrato">Contrato</option>
                            </select>

                            <button className='btn btn-primary' onClick={sliderMoveBack}>Atras</button>
                            <button className='btn btn-primary' onClick={sliderMove}>continuar</button>

                        </div>


    
                        <div className='container3'>
                            <h1>Describa la oferta de empleo</h1>
                            <label>Describa con detalle cuales son las caracteristicas de la oferta de empleo</label>
                            <textarea
                                cols="30"
                                rows="10"
                                class=""
                                id="descVacant"
                                name="descVacant"
                            >
                            </textarea>

                            <input
                            className="form-control mb-2"
                            type="text"
                            placeholder="correo Alertas"

                        ></input>

                        <select {...register('modality')} className="form-control mt-2" >

                            <option placeholder="Modalidad" value=""></option>
                            <option value="Presencial">Presencial</option>
                            <option value="Virtual">Virtual</option>
                            <option value="Hibrido">Hibirido</option>
                        </select>

                            <button className='btn btn-primary' onClick={sliderMoveBack}>Atras</button>
                            <button className='btn btn-primary btncontinue2'>Finalizar</button>
                        </div>







                        

                        


                    </div>





                </form>
            </div>

        </>
    )
}

export default PublishOfert;
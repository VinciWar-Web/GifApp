import React, { useState } from 'react'
import AppContenido from './AppContenido'

const AppAgregar = () => {

     const [input, setInput] = useState([])
     const [submit, setSubmit] = useState([])

     const handleInput = (e) => {
          setInput(e.target.value)
     }

     const handleSubmit = (e) =>{
          e.preventDefault()

          if(input.length > 1){

               setSubmit([input, ...submit])
               setInput('')
               
          }
     }

     return (
          <>
               <div className="contenedor-formulario">
                    <form onSubmit={ handleSubmit }>
                         <input 
                              type="text"
                              value={ input }
                              onChange={ handleInput }
                         />
                         <button>Buscar</button>
                    </form>
               </div>

               <div className="contenedor-contenido">
                    {
                         submit.map( submits => (
                              <AppContenido 
                                    key={ submits  }
                                   submits={ submits }
                              />
                              ))
                         }
                              
               </div>
          </>
     )
}

export default AppAgregar


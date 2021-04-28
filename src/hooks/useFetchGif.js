import { useEffect, useState } from "react"
import dataGif from "../helpers/dataGif"

const useFetchGif = ( submits ) => {

     const [estado, setEstado] = useState({

          data: [],
          caragndo: true   
     })

     useEffect( () => {

          dataGif( submits )
               .then( img => {

                    setTimeout( () => {

                         setEstado({
                     
                              data: img,
                              cargando: false
                         })

                    }, 1500)
               })

     },[submits])

     return estado
}

export default useFetchGif

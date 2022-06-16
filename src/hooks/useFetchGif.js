import { useEffect, useState } from "react"
import dataGif from "../helpers/dataGif"

const useFetchGif = ( submits ) => {

     const [estado, setEstado] = useState({
          image: [],
          caragndo: true   
     })

     useEffect( () => {
          dataGif( submits )
               .then( img => {
                    setEstado({
                         image: img,
                         cargando: false
                    })
               })
     },[submits])


     return estado
}

export default useFetchGif

import useFetchGif from '../hooks/useFetchGif'
import loading from '../img/loading.gif'

const AppContenido = ({ submits }) => {

     const { data:imagenes, caragndo } =  useFetchGif( submits )

     return   (
          <div>
              <h3 className="titulo-gif">{ submits }</h3>

               { caragndo && <img className="loadin" src={loading} /> }

               {
                   imagenes.map(item => (
                         <img className="GifImg" key={ item.id } src={ item.imagen } alt={ item.titulo } />
                   ))
               }
          </div>
     )
}

export default AppContenido


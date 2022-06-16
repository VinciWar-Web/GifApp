import useFetchGif from '../hooks/useFetchGif'
import loading from '../img/loading.gif'
import emoti from '../img/emoticone.png'


const AppContenido = ({ submits }) => {

     const { image, caragndo } =  useFetchGif( submits )

     return   (
          <div>
               {
                    image.length !== 0 ?
                         <h3 className="titulo-gif">{ submits }</h3>
                    :
                    <>
                         <h3 className="titulo-gif">Auch. No encontramos este Gif.</h3>
                         <img src={emoti} alt={emoti} />
                    </>
               }

               { caragndo && <img className="loadin" src={ loading } alt="Cargando..." /> }

               {
                    image.map( item => (
                         <img className="GifImg" key={ item.id } src={ item.imagen } alt={ item.titulo } />
                    ))
               }
          </div>
     )
}

export default AppContenido


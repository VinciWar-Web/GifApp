const dataGif = async ( submits ) => {
          
     const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( submits ) }&limit=14&api_key=6zht4GLlcs4rDP4dttX29Xbox7zgGTcI`

     const resp = await fetch(url)
     const { data } = await resp.json()

     const gif = data.map( img => {
          return{
               id: img.id,
               titulo: img.title,
               imagen: img.images.downsized_medium.url
          }
     })

     return gif 

}

export default dataGif
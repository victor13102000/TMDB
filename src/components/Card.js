const Card = ({media})=>{

console.log(media)

const contenido= media.data ? media.data : media
const imageUrl= "https://image.tmdb.org/t/p/w300"+contenido.poster_path;


    return (<>
 <div class="card">
     <img src={imageUrl}/>
      <div class="card-content">
        <h2>{contenido.title}</h2>
        <p>
          {contenido.overview}
        </p>
        <a href="#" class="btn"
          >watch now
          <i class="las la-long-arrow-alt-right"></i>
        </a>
      </div>
    </div>
    </>)
}

export default Card
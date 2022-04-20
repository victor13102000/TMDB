import { Link } from "react-router-dom";
const Card = ({media, type})=>{



const contenido= media.data ? media.data : media
const imageUrl= "https://image.tmdb.org/t/p/w300"+contenido.poster_path;
const id= contenido.id


    return (<>

 <div class="card">
     <img  src={imageUrl}/>
      <div class="card-content">
        <h2>{contenido.title}</h2>
        <p>
          {contenido.overview}
        </p>
        <Link to={`/simpleview/${id}/${type}`}>
        <a href="#" class="btn"
          > See more information
          <i class="las la-long-arrow-alt-right"></i>
        </a>
</Link>
      </div>
    </div>
    </>)
}

export default Card
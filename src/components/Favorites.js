import CardFavorite from "./CardFavorite";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFavorites } from "../state/favorite";


const Favorites = () => {
  const dispatch=  useDispatch()
  const params = useParams();
  let { id } = params;
  id = parseInt(id);
  
  
  useEffect( ()=> {
 axios.get(`http://localhost:3001/favorites/${id}`)
    .then((fav)=> dispatch(setFavorites(fav.data)))
  }, []);

  const favorites= useSelector((state) => state.favorites);
console.log('favoritesss', favorites)
  return (
    <div className="galery">
      {favorites &&
        favorites.map((favorite) => {
          return <CardFavorite type={favorite.type} id={favorite.mediaId} />;
        })}
    </div>
  );
};

export default Favorites;

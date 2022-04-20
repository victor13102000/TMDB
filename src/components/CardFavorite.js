import axios from "axios";
import { useEffect, useState } from "react";
import { set } from "react-hook-form";
import { Link } from "react-router-dom";

const Card = ({ type, id }) => {
  const [mediaTitle, setMediaTitle] = useState();
  const [mediaOverview, setMediaOverview] = useState();
  const [posterPath, setPosterPath] = useState();

  useEffect(() => {
    axios
      .post("http://localhost:3001/search/single", { id, type })
      .then((res) => {
        setMediaTitle(res.data ? res.data.title : res.title);
        setMediaOverview(res.data ? res.data.overview : res.overview);
        setPosterPath(
          res.data
            ? `https://image.tmdb.org/t/p/w300${res.data.poster_path}`
            : `https://image.tmdb.org/t/p/w300${res.poster_path}`
        );
      });
  }, []);

  /*   const imageUrl = "https://image.tmdb.org/t/p/w300" + media.poster_path;  */

  return (
    <>
      <div class="card">
        <img src={`${posterPath}`}/>
        <div class="card-content">
          <h2> {mediaTitle} </h2>
          <p> {mediaOverview} </p>
          <Link to={`/simpleview/${id}/${type}`}>
            <a href="#" class="btn">
              {" "}
              See more information
              <i class="las la-long-arrow-alt-right"></i>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;

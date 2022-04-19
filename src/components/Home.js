import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setSearch } from "../state/search";

const Home = () => {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");
  const [type, setType] = useState("");
  const navigate = useNavigate();

 
  const onChange = (e) => {
    setSearchInput(e.target.value);
  };

  const onClickTv = (e) => {
    setType("tv");
  };
  const onClickMovies = (e) => {
    setType("movie");
  };
  
  const searchMedia = async () => {
    const result = await axios.post("http://localhost:3001/search", {
      searchInput,
      type,
    });
    const media = result.data;
    dispatch(setSearch(media));
    navigate("/search");
  };

  return (
    <div className="padre">
      <div className="welcome">Welcome to TMDB!</div>
      <div className="-search-">Do you want to perform a search?</div>
      <div className="searchh">
        <form class="searchform cf">
          <input type="text" placeholder="Search media" onChange={onChange} />
          <button type="button" onClick={searchMedia}>
            Search
          </button>
          <div className="optionSearch">
            <button onClick={onClickTv} type="button" className="tv">
              Tv's
            </button>
            <button
              onClick={onClickMovies}
              type="button"
              className="buttonSearchh movies"
            >
              Movie's
            </button>
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;

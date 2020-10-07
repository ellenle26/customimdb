import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import "./MovieCard.css";
import "../../App.css";

let apikey = process.env.REACT_APP_APIKEY;
const Trailer = () => {
  let [movieTrailer, setMovieTrailer] = useState("");
  let { id } = useParams();
  const history = useHistory();

  const getMovieTrailer = async (movieId) => {
    let url = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apikey}&language=en-US`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("trailer ne", data);
    setMovieTrailer(data.results[0].key);
  };

  const goBack = () => {
    history.push(`/`);
  };

  useEffect(() => {
    getMovieTrailer(id);
  }, [id]);

  return (
    <div className="page trailer">
      {movieTrailer && (
        <iframe
          style={{ width: "80%", height: "80%" }}
          src={`https://www.youtube.com/embed/${movieTrailer}`}
        ></iframe>
      )}
      <p onClick={() => goBack()}>Go back</p>
    </div>
  );
};

export default Trailer;

import React from "react";
import {
  InfoCircleOutlined,
  PlayCircleOutlined,
  StarFilled,
  VideoCameraOutlined,
} from "@ant-design/icons";
import Badge from "react-bootstrap/Badge";
import "./MovieCard.css";

const MovieCard = ({ movie, genreList }) => {
  if (!movie) {
    return (
      <div style={{ textAlign: "center", margin: "30px 0" }}>
        <VideoCameraOutlined spin style={{ fontSize: "50px" }} />
      </div>
    );
  }
  if (genreList.length < 1 || genreList == null) {
    console.log("herererere");
    return <div>afsfsafasf</div>;
  }
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`}
            className="cardImage"
            alt=""
          />
        </div>
        <div className="flip-card-back">
          <div className="movieTitle">{movie.title}</div>
          <div className="rating">
            <StarFilled style={{ color: "#db7100" }} /> &nbsp;
            <span style={{ height: "16px" }}>{movie.vote_average}</span>
          </div>
          <div>
            {movie.genre_ids.map((id) => {
              return (
                <Badge variant="light" style={{ marginRight: "3px" }}>
                  {genreList.find((item) => item.id == id).name}
                </Badge>
              );
            })}
          </div>
          <div className="movieDes">{movie.overview}</div>
          <div>
            <a
              href={`${`https://www.themoviedb.org/movie/${movie.id}`}`}
              target="_"
            >
              <InfoCircleOutlined style={{ fontSize: "25px" }} />
            </a>
            &nbsp; &nbsp;
            <PlayCircleOutlined style={{ fontSize: "25px" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

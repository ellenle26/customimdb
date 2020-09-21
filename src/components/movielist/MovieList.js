import React from "react";
import MovieCard from "../movieCard/MovieCard.js";
import { VideoCameraOutlined } from "@ant-design/icons";
import "./MovieList.css";

const MovieList = ({ list,genreList }) => {
  console.log(list);
  if (!list) {
    return (
      <div style={{ textAlign: "center", margin: "30px 0" }}>
        <VideoCameraOutlined spin style={{ fontSize: "50px" }} />
      </div>
    );
  }
  return (
    <div className="movieList">
      {list.map((item) => {
        return <MovieCard movie={item} genreList={genreList} />;
      })}
    </div>
  );
};

export default MovieList;

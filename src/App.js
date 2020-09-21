import React, { useState, useEffect } from "react";
import "./App.css";
import MovieList from "./components/movielist/MovieList.js";
import Banner from "./components/banner/Banner.js";
import {
  CaretLeftOutlined,
  CaretRightOutlined,
  UpSquareOutlined,
} from "@ant-design/icons";
import "bootstrap/dist/css/bootstrap.min.css";

let apikey = process.env.REACT_APP_APIKEY;

function App() {
  let [movieList, setMovieList] = useState([]);
  let [movieLatest, setMovieLatest] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let keyword = "";
  let type = "top_rated";
  let [page, setPage] = useState(1);
  let [movieTrailer, setMovieTrailer] = useState("");

  const getMovie = async (type, page) => {
    let url = `https://api.themoviedb.org/3/movie/${type}?api_key=${apikey}&language=en-US&page=${page}`;
    let response = await fetch(url);
    let data = await response.json();
    setMovieList(data.results);
    console.log(data);
  };

  const getMovieTrailer = async (movieId) => {
    let url = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apikey}&language=en-US`;
    let response = await fetch(url);
    let data = await response.json();
    setMovieTrailer(data.results[0].key);
  };

  const getMovieByGenre = async (genreId) => {
    genreId = document.getElementById("filterByGenre").value;
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}`;
    let response = await fetch(url);
    let data = await response.json();
    setMovieList(data.results);
  };

  const getMovieLatest = async (page) => {
    let url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apikey}&language=en-US&page=1`;
    let response = await fetch(url);
    let data = await response.json();
    setMovieLatest(data.results);
  };

  const searchByKeyword = async (keyword) => {
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${keyword}`;
    let response = await fetch(url);
    let data = await response.json();
    setMovieList(data.results);
  };

  const sortByPopular = (highOrLowFirst) => {
    highOrLowFirst = document.getElementById("ratePopular").value;
    if (highOrLowFirst === "low") {
      movieList.sort((a, b) => a.popularity - b.popularity);
    } else if (highOrLowFirst === "high") {
      movieList.sort((a, b) => b.popularity - a.popularity);
    }
    setMovieList([...movieList]);
  };

  const sortByRating = (highOrLowFirst) => {
    highOrLowFirst = document.getElementById("rating").value;
    if (highOrLowFirst === "low") {
      movieList.sort((a, b) => a.vote_average - b.vote_average);
    } else if (highOrLowFirst === "high") {
      movieList.sort((a, b) => b.vote_average - a.vote_average);
    }
    setMovieList([...movieList]);
  };

  const previousPage = () => {
    if (page <= 1) {
      page = 1;
    } else {
      page--;
    }
    setPage(page);
    getMovie(type, page);
    setMovieList([...movieList]);
  };

  const nextPage = () => {
    page++;
    setPage(page);
    getMovie(type, page);
    setMovieList([...movieList]);
  };

  // useEffect is like componentdidount in class component
  useEffect(() => {
    getMovie(type, page);
    getMovieLatest();
  }, [type, page]);

  return (
    <div className="page">
      <div className="logoBar">
        <img src=".././images/logooff.png" style={{ height: "70px" }} alt="" />
        <div style={{ margin: "0 20px", height: "40px" }}>POPCORN</div>
        <img src=".././images/logooff3.png" style={{ height: "70px" }} alt="" />
      </div>
      <Banner film={movieLatest} />
      <div className="boxSelectBoard">
        <div id="selectBoard">
          <div style={{ margin: "10px 0" }}>
            <button
              onClick={() => {
                getMovie("top_rated", page);
              }}
            >
              Top Rated
            </button>
            <button
              onClick={() => {
                getMovie("popular", page);
              }}
            >
              Popular
            </button>
            <button
              onClick={() => {
                getMovie("now_playing", page);
              }}
            >
              Now Playing
            </button>
            <select
              id="filterByGenre"
              onChange={() => {
                getMovieByGenre();
              }}
            >
              <option value="" disabled selected>
                Filter By Genre
              </option>
              <option value="28">Action</option>
              <option value="12">Adventure</option>
              <option value="16">Animation</option>
              <option value="35">Comedy</option>
              <option value="80">Crime</option>
              <option value="99">Documentary</option>
              <option value="18">Drama</option>
              <option value="10751">Family</option>
              <option value="14">Fantasy</option>
            </select>
          </div>
          <div className="pageOption">
            <select
              id="ratePopular"
              onChange={() => {
                sortByPopular();
              }}
            >
              <option value="" disabled selected>
                Sort By Popularity
              </option>
              <option value="high">Highest first</option>
              <option value="low">Lowest first</option>
            </select>
            <select
              id="rating"
              onChange={() => {
                sortByRating();
              }}
            >
              <option value="" disabled selected>
                Sort By Rating
              </option>
              <option value="high">Highest first</option>
              <option value="low">Lowest first</option>
            </select>
          </div>
          <div className="searchSection">
            <input
              onChange={(event) => (keyword = event.target.value)}
              placeholder="Search movie"
            />
            <button onClick={() => searchByKeyword(keyword)}>Search</button>
          </div>
        </div>
      </div>
      <div className="changePage">
        <div>
          Previous{" "}
          <CaretLeftOutlined
            style={{ fontSize: "40px" }}
            onClick={() => {
              previousPage();
            }}
          />
        </div>
        <div>
          <CaretRightOutlined
            style={{ fontSize: "40px" }}
            onClick={() => {
              nextPage();
            }}
          />{" "}
          Next
        </div>
      </div>
      <MovieList
        list={movieList}
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
        getMovieTrailer={getMovieTrailer}
        movieTrailer={movieTrailer}
      />
      <div style={{ textAlign: "center" }}>
        <a href="#selectBoard">
          {" "}
          GO
          <UpSquareOutlined style={{ fontSize: "40px" }} /> UP
        </a>
      </div>
    </div>
  );
}

export default App;

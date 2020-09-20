import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { VideoCameraOutlined } from "@ant-design/icons";
import "../banner/Banner.css";

const Banner = ({ film }) => {
  console.log(film);
  let movie1 = film[0];
  let movie2 = film[1];
  let movie3 = film[2];
  if (!movie1 && !movie2 && !movie3) {
    return (
      <div style={{ textAlign: "center", margin: "30px 0" }}>
        <VideoCameraOutlined spin style={{ fontSize: "50px" }} />
      </div>
    );
  }
  return (
    <div className="banner">
      <Carousel className="carouselEdit">
        <Carousel.Item>
          <div className="bannerContent">
            <img
              src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie1.poster_path}`}
              className="latestMov"
              alt=""
            />
            <div className="latestInfo">
              <h2>
                <u>
                  <b>#1 Latest</b>
                </u>
              </h2>
              <p>
                <b>{movie1.title}</b>
              </p>
              <div className="info">{movie1.overview}</div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="bannerContent">
            <img
              src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie2.poster_path}`}
              className="latestMov"
              alt=""
            />
            <div className="latestInfo">
              <h2>
                <u>
                  <b>#2 Latest</b>
                </u>
              </h2>
              <p>
                <b>{movie2.title}</b>
              </p>
              <div style={{ overflow: "auto", marginBottom: "10px" }}>
                {movie2.overview}
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="bannerContent">
            <img
              src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie3.poster_path}`}
              className="latestMov"
              alt=""
            />
            <div className="latestInfo">
              <h2>
                <u>
                  <b>#3 Latest</b>
                </u>
              </h2>
              <p>
                <b>{movie3.title}</b>
              </p>
              <div style={{ overflow: "auto", marginBottom: "10px" }}>
                {movie3.overview}
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;

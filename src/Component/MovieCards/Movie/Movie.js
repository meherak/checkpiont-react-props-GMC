import React from "react";
import "./Movie.scss";

const Movie = ({ movieData }) => {
  const notification = () => alert(movieData.name);
  return (
    <div onClick={notification}>
      <div className="movie_card" id={movieData.name}>
        <div className="info_section">
          <div className="movie_header">
            <img
              className="locandina"
              src={movieData.image}
              alt={`${movieData.name}img`}
            />
            <h1>{movieData.name}</h1>
            <h4>{movieData.date}</h4>
            {/* <span className="minutes">117 min</span> */}
            <p className="type">{movieData.type}</p>
          </div>
          <div className="movie_desc">
            <p className="text">{movieData.description}</p>
          </div>
        </div>
        <div
          className="blur_back bright_back"
          style={{ background: `url(${movieData.image})` }}
        />
      </div>
    </div>
  );
};

export default Movie;

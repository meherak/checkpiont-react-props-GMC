import React from "react";
import Movie from "./Movie/Movie";

const MovieCards = (props) => {
  return (
    <div>
      {props.MovieCards.map((el) => (
        <Movie movieData={el} key={el.id} />
      ))}
    </div>
  );
};

export default MovieCards;

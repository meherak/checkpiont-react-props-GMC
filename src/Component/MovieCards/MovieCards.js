import React from "react";
import Movie from "./Movie/Movie";

const MovieCards = ({ MovieCards, SearcheMovie, searcheStars }) => {
  console.log(searcheStars);
  return (
    <div>
      {MovieCards.filter((el) => {
        return (
          el.name.toLowerCase().includes(SearcheMovie.toLowerCase()) &&
          searcheStars <= el.rating
        );
      }).map((el) => (
        <Movie movieData={el} key={el.id} />
      ))}
    </div>
  );
};

export default MovieCards;

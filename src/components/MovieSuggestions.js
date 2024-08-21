import React from "react";
import TrendingMovieList from "./TrendingMovieList";
import { useSelector } from "react-redux";

const MovieSuggestions = () => {
  const movies = useSelector((store) => store.movies);
  console.log("ssmovies", movies);
  return (
    movies.currentPlayingMovies && movies.popularMovies && (
      <div className="bg-black">
        <div className="-mt-52 pl-4 relative z-20">
        <TrendingMovieList
          title="Current playing"
          movies={movies.currentPlayingMovies}
        />
         <TrendingMovieList
          title="Popular"
          movies={movies.popularMovies}
        />
         <TrendingMovieList
          title="Trending"
          movies={movies.currentPlayingMovies}
        />
         <TrendingMovieList
          title="Upcoming Movies"
          movies={movies.currentPlayingMovies}
        />
         <TrendingMovieList
          title="Horror"
          movies={movies.currentPlayingMovies}
        />
        </div>
      </div>
    )
  );
};

export default MovieSuggestions;

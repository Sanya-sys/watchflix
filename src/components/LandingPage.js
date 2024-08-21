import React from "react";
import MainHeader from "./MainHeader";
import useCurrentPlayingMovies from "../custom-hooks/useCurrentPlayingMovies";
import HighlightMovie from "./HighlightMovie";
import MovieSuggestions from './MovieSuggestions';
import usePopularMovies from "../custom-hooks/usePopularMovies";

const LandingPage = () => {
  useCurrentPlayingMovies();
  usePopularMovies();

  return (
    <div>
      <MainHeader />
      <HighlightMovie />
      <MovieSuggestions/>
    </div>
  );
};

export default LandingPage;

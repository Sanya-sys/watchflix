import React from "react";
import MainHeader from "./MainHeader";
import useCurrentPlayingMovies from "../custom-hooks/useCurrentPlayingMovies";
import HighlightMovie from "./HighlightMovie";
// import TrendingMovieList from "./TrendingMovieList";

const LandingPage = () => {
  useCurrentPlayingMovies();

  return (
    <div>
      <MainHeader />
      <HighlightMovie />
      {/* <TrendingMovieList /> */}
    </div>
  );
};

export default LandingPage;

import React from "react";
import { useSelector } from "react-redux";
import TrendingMovieList from "./TrendingMovieList";
import VideoStreaming from "./VideoStreaming";
import VideoTitle from "./VideoTitle";

const HighlightMovie = () => {
  const movies = useSelector((store) => store.movies?.currentPlayingMovies);

  if (!movies) return;

  const highlightMovie = movies[19];

  const { original_title, overview, id } = highlightMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoStreaming movieId={id} />
      <TrendingMovieList/>
    </div>
  );
};

export default HighlightMovie;

import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCurrentPlayingMovies } from "../utils/movieSlice";

const useCurrentPlayingMovies = () => {
  const dispatch = useDispatch();

  const getCurrentPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addCurrentPlayingMovies(json.results));
  };

  useEffect(() => {
    getCurrentPlayingMovies();
  }, []);
};

export default useCurrentPlayingMovies;

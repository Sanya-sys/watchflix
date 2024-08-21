import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    currentPlayingMovies: null,
    trailerVideo: null,
    popularMovies: null
  },
  reducers: {
    addCurrentPlayingMovies: (state, action) => {
      state.currentPlayingMovies = action.payload;
    },
    addTrailerVideo : (state, action) => {
      state.trailerVideo = action.payload
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload
    }
  },
});

export const { addCurrentPlayingMovies, addTrailerVideo, addPopularMovies } = movieSlice.actions;

export default movieSlice.reducer;

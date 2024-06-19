import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    currentPlayingMovies: null,
    trailerVideo: null
  },
  reducers: {
    addCurrentPlayingMovies: (state, action) => {
      state.currentPlayingMovies = action.payload;
    },
    addTrailerVideo : (state, action) => {
      state.trailerVideo = action.payload
    }
  },
});

export const { addCurrentPlayingMovies, addTrailerVideo } = movieSlice.actions;

export default movieSlice.reducer;

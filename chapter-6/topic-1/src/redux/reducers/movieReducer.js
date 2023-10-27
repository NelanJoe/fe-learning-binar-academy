import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  popular: [],
  detailMovie: {},
  videos: [],
  resultSearchMovie: [],
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setPopular: (state, action) => {
      state.popular = action.payload;
    },
    setDetailMovie: (state, action) => {
      state.detailMovie = action.payload;
    },
    setVideos: (state, action) => {
      state.videos = action.payload;
    },
    setResultSearchMovies: (state, action) => {
      state.resultSearchMovie = action.payload;
    },
  },
});

export const { setPopular, setDetailMovie, setVideos, setResultSearchMovies } =
  movieSlice.actions;
export const movieReducer = movieSlice.reducer;

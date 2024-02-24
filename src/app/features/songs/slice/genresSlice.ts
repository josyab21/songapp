import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../../store/store";
import { Genre } from "../../../../types/Genre";

type InitialState = {
  genres: Genre[];
  loading: boolean;
  error: string | null;
};

const initialState: InitialState = {
  genres: [],
  loading: false,
  error: null,
};

const genresSlice = createSlice({
  name: "genres",
  initialState,
  reducers: {
    getGenresStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getGenresSuccess: (state, action: PayloadAction<Genre[]>) => {
      state.genres = action.payload;
      state.loading = false;
    },
    getGenresFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const selectLoading = (state: RootState) => state.genres.loading;
export const selectError = (state: RootState) => state.genres.error;
export const selectGenres = (state: RootState) => state.genres.genres;

export const { getGenresStart, getGenresSuccess, getGenresFailure } =
  genresSlice.actions;

export default genresSlice.reducer;

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../../store/store";
import { Artist } from "../../../../types/Artist";

type ArtistState = {
  artists: Artist[];
  loading: boolean;
  error: string | null;
};

const initialState: ArtistState = {
  artists: [],
  loading: false,
  error: null,
};

const artistSlice = createSlice({
  name: "artists",
  initialState,
  reducers: {
    getArtistStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getArtistSuccess: (state, action: PayloadAction<Artist[]>) => {
      state.artists = action.payload;
      state.loading = false;
    },
    getArtistFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const selectLoading = (state: RootState) => state.artist.loading;
export const selectError = (state: RootState) => state.artist.error;
export const selectArtists = (state: RootState) => state.artist.artists;

export const { getArtistStart, getArtistSuccess, getArtistFailure } =
  artistSlice.actions;
export default artistSlice.reducer;

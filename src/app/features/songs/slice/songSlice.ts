import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ISong } from "../../../../types/song";
import { RootState } from "../../../../store/store";

interface SongState {
  songs: ISong[];
  loading: boolean;
  error: string | null;
}

const initialState: SongState = {
  songs: [],
  loading: false,
  error: null,
};

const songSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    fetchSongsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchSongsSuccess(state, action: PayloadAction<ISong[]>) {
      state.songs = action.payload;
      state.error = null;
      state.loading = false;
    },
    fetchSongsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    addSongStart(state) {
      state.loading = true;
      state.error = null;
    },
    addSongSuccess(state, action: PayloadAction<ISong>) {
      state.songs.push(action.payload);
      state.loading = false;
      state.error = null;
    },
    addSongFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
    updateSongStart(state) {
      state.loading = true;
      state.error = null;
    },
    updateSongSuccess(state, action: PayloadAction<ISong>) {
      const index = state.songs.findIndex(
        (song) => song._id === action.payload._id
      );
      if (index !== -1) {
        state.songs[index] = action.payload;
      }
      state.error = null;
      state.loading = false;
    },
    updateSongFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    deleteSongStart(state) {
      state.loading = true;
      state.error = null;
    },
    deleteSongSuccess(state, action: PayloadAction<string>) {
      state.loading = false;
      state.songs = state.songs.filter((song) => song._id !== action.payload);
      state.error = null;
    },
    deleteSongFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchSongsStart,
  fetchSongsSuccess,
  fetchSongsFailure,
  addSongStart,
  addSongSuccess,
  addSongFailure,
  updateSongStart,
  updateSongSuccess,
  updateSongFailure,
  deleteSongStart,
  deleteSongSuccess,
  deleteSongFailure,
} = songSlice.actions;

export const selectSongById = (songId: string) => (state: RootState) =>
  state.songs.songs.find((song) => song._id === songId);
export const selectSongs = (state: RootState) => state.songs.songs;
export const selectLoading = (state: RootState) => state.songs.loading;
export const selectError = (state: RootState) => state.songs.error;

export default songSlice.reducer;

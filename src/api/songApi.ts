import axios from "axios";
import { BASE_URL } from "../constant/constant";
import { ISong } from "../types/song";
import { Statistics } from "../types/statistics";
import { Artist } from "../types/Artist";
import { Album } from "../types/Album";
import { Genre } from "../types/Genre";

export const fetchSongs = async () => {
  const response = await axios.get(`${BASE_URL}/songs`);
  return response.data;
};

// Function to create a new song
export const createSong = async (songData: ISong): Promise<ISong> => {
  try {
    const response = await axios.post(`${BASE_URL}/songs`, songData);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.error || "Failed to create song");
  }
};

export const updateSong = async (
  id: string,
  songData: Partial<ISong>
): Promise<ISong> => {
  try {
    const response = await axios.put(`${BASE_URL}/songs/${id}`, songData);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.error || "Failed to update song");
  }
};

export const deleteSong = async (id: string): Promise<void> => {
  try {
    await axios.delete(`${BASE_URL}/songs/${id}`);
  } catch (error: any) {
    throw new Error(error.response?.data?.error || "Failed to delete song");
  }
};
export const getSongById = async (id: any): Promise<ISong> => {
  try {
    const response = await axios.get(`${BASE_URL}/songs/${id}`);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.error || "Failed to fetch song");
  }
};

export const getOverallStatistics = async (): Promise<Statistics> => {
  try {
    const response = await axios.get<Statistics>(
      `${BASE_URL}/songs/statistics`
    );
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.error || "Failed to fetch overall statistics"
    );
  }
};

// Function to fetch all Artists
export const fetchSongsArtistApi = async (): Promise<Artist[]> => {
  try {
    const response = await axios.get<Artist[]>(`${BASE_URL}/songs/allartist`);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.error || "Faild to Fecth Artist");
  }
};

// Function to fetch all Albums
export const fetchSongsAlbumApi = async (): Promise<Album[]> => {
  try {
    const response = await axios.get<Album[]>(`${BASE_URL}/songs/allalbum`);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.error || "Faild to Fecth Albums");
  }
};

// Function to fetch Genres
export const fetchSongsGenresApi = async (): Promise<Genre[]> => {
  try {
    const response = await axios.get<Genre[]>(`${BASE_URL}/songs/allgenre`);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.error || "Faild to Fecth Genre");
  }
};

export const getSongsCountByGenre = async (): Promise<{
  [genre: string]: number;
}> => {
  try {
    const response = await axios.get(`${BASE_URL}/statistics/genre`);
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.error || "Failed to fetch songs count by genre"
    );
  }
};

export const getSongAndAlbumInArtist = async (
  artistId: string
): Promise<{ songs: ISong[]; albums: string[] }> => {
  try {
    const response = await axios.get(`${BASE_URL}/artist/${artistId}`);
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.error ||
        "Failed to fetch songs and albums by artist"
    );
  }
};

export const getSongsInAlbum = async (albumId: string): Promise<ISong[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/album/${albumId}`);
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.error || "Failed to fetch songs in album"
    );
  }
};

export const getAlbumWithMostSongs = async (): Promise<string> => {
  try {
    const response = await axios.get(`${BASE_URL}/statistics/most-songs-album`);
    return response.data.album;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.error || "Failed to fetch album with most songs"
    );
  }
};

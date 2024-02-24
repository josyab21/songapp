import React, { useEffect } from "react";
import styled from "styled-components";
import {
  selectGenres,
  selectError,
  selectLoading,
  getGenresStart,
} from "../app/features/songs/slice/genresSlice";
import { useAppDispatch, useAppSelector } from "../store/store";
import Loading from "../app/components/Loading";

const Genres: React.FC = () => {
  const dispatch = useAppDispatch();

  const genres = useAppSelector(selectGenres);
  const isLoading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);

  useEffect(() => {
    dispatch(getGenresStart());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  } else if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      <GenreContainer>
        <h1>All Genres</h1>
        <GenreGrid>
          {genres.map((genre, index) => (
            <GenreCard key={index}>
              <h2>{genre.genre}</h2>
              <p>Total Artists: {genre.numberOfAlbums}</p>
              <p>Total Albums: {genre.numberOfArtists}</p>
              <p>Total Songs: {genre.songs}</p>
            </GenreCard>
          ))}
        </GenreGrid>
      </GenreContainer>
    </>
  );
};

const GenreContainer = styled.div<{ isMobile?: boolean }>`
  margin-left: ${({ isMobile }) => (isMobile ? "0" : "270px")};
  @media (max-width: 768px) {
    margin-left: 150px;
  }
`;

const GenreGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

const GenreCard = styled.div<{ isMobile?: boolean }>`
  padding: ${({ isMobile }) => (isMobile ? "0.5rem" : "1.5rem")};
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #1e40af;
  border-radius: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    background-color: #f0f0f0;
  }
`;

export default Genres;

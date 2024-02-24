import React, { useEffect } from "react";
import styled from "styled-components";
import {
  getArtistStart,
  selectArtists,
  selectError,
  selectLoading,
} from "../app/features/songs/slice/artistSlice";
import { useAppDispatch, useAppSelector } from "../store/store";
import Loading from "../app/components/Loading";

const Artists: React.FC = () => {
  const dispatch = useAppDispatch();

  const artists = useAppSelector(selectArtists);
  const isLoading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);

  useEffect(() => {
    dispatch(getArtistStart());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  } else if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      <ArtistContainer>
        <h1>All Artists</h1>
        <ArtistGrid>
          {artists.map((artist, index) => (
            <ArtistCard key={index}>
              <h2>{artist.artist}</h2>
              <p>Total Albums: {artist.albums}</p>
              <p>Total Songs: {artist.songs}</p>
            </ArtistCard>
          ))}
        </ArtistGrid>
      </ArtistContainer>
    </>
  );
};

const ArtistContainer = styled.div<{ isMobile?: boolean }>`
  margin-left: ${({ isMobile }) => (isMobile ? "0px" : "270px")};
  padding: 1rem;

  @media (max-width: 768px) {
    margin-left: 110px;
  }
`;

const ArtistGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

const ArtistCard = styled.div<{ isMobile?: boolean }>`
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

export default Artists;

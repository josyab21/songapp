import React, { useEffect } from "react";
import styled from "styled-components";
import {
  getAlbumStart,
  selectAlbums,
  selectError,
  selectLoading,
} from "../app/features/songs/slice/albumSlice";
import { useAppDispatch, useAppSelector } from "../store/store";
import Loading from "../app/components/Loading";

const Albums: React.FC = () => {
  const dispatch = useAppDispatch();
  const albums = useAppSelector(selectAlbums);
  const isLoading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);

  useEffect(() => {
    dispatch(getAlbumStart());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  } else if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      <AlbumContainer>
        <h1>All Albums</h1>
        <AlbumGrid>
          {albums.map((album, index) => (
            <AlbumCard key={index}>
              <h2>{album.album}</h2>
              <p>Artist: {album.artist}</p>
              <p>Total Songs: {album.songs}</p>
            </AlbumCard>
          ))}
        </AlbumGrid>
      </AlbumContainer>
    </>
  );
};

const AlbumContainer = styled.div<{ isMobile?: boolean }>`
  padding: 1rem;
  margin-left: ${({ isMobile }) => (isMobile ? "0" : "270px")};

  @media (max-width: 768px) {
    margin-left: 110px;
  }
`;

const AlbumGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

const AlbumCard = styled.div<{ isMobile?: boolean }>`
  padding: ${({ isMobile }) => (isMobile ? "0.5rem" : "1rem")};
  width: ${({ isMobile }) => (isMobile ? "0.5rem" : "75%")};
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

export default Albums;

import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/store";
import {
  selectSongs,
  selectLoading,
  selectError,
  fetchSongsStart,
  deleteSongStart,
} from "../app/features/songs/slice/songSlice";
import Loading from "../app/components/Loading";
import { useEffect } from "react";
import React from "react";
import { message } from "antd";

const Songs: React.FC = () => {
  // Redux state selectors
  const songs = useAppSelector(selectSongs);
  const isLoading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchSongsStart());
  }, [dispatch]);

  const handleDelete = (id: any) => async () => {
    try {
      dispatch(deleteSongStart(id));
      if (isLoading) {
        return <Loading />;
      } else message.success("Song Deleted");
    } catch (error) {
      console.error("Error deleting song:", error);
    }
  };

  // Render content based on state
  const renderContent = () => {
    if (error) {
      return (
        <NoSongContainer>
          <h1>{error}</h1>
        </NoSongContainer>
      );
    } else if (songs.length === 0) {
      return (
        <NoSongContainer>
          <h1>No Songs Found</h1>
        </NoSongContainer>
      );
    } else {
      return (
        <>
          <SongContainer>
            <SongGrid>
              {songs.map((song, index) => (
                <SongCard key={index}>
                  <Title>{song.title}</Title>
                  <Details>Artist: {song.artist}</Details>
                  <Details>Album: {song.album}</Details>
                  <Details>Genre: {song.genre}</Details>
                  <ButtonGroup>
                    <EditButton to={`/edit/${song._id}`}>Update</EditButton>
                    <DeleteButton onClick={handleDelete(song._id)}>
                      Delete
                    </DeleteButton>
                  </ButtonGroup>
                </SongCard>
              ))}
              <AddSongButton to={`/addsong`}>Add Song</AddSongButton>
            </SongGrid>
          </SongContainer>
        </>
      );
    }
  };

  return <Container>{renderContent()}</Container>;
};

// Styled components

const Container = styled.div`
  position: relative;
  padding: 1rem;
  @media (min-width: 768px) {
    padding: 1rem 2rem 2rem;
  }
`;

const SongContainer = styled.div<{ isMobile?: boolean }>`
  padding: ${({ isMobile }) => (isMobile ? "1rem" : "1rem 2rem 2rem")};
  margin-left: 230px;
  @media (max-width: 768px) {
    margin-left: 50px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const SongGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Change to single column layout for mobile view */
  }
`;

const SongCard = styled.div`
  padding: 1.5rem;
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
  @media (max-width: 768px) {
    padding: 1rem;
    max-width: 250px; /* Adjust max-width for mobile view */
    margin: auto; /* Center the card horizontally */
  }
`;

const Title = styled.h4`
  font-size: 1rem;
  font-weight: bold;
  margin: 1rem 0 0.5rem;
`;

const Details = styled.p`
  font-size: 0.87rem;
  margin-bottom: 0.5rem;
`;

const EditButton = styled(Link)`
  display: block;
  margin-top: 1rem;
  height: 2rem;
  width: 7rem;
  border-radius: 0.5rem;
  border: none;
  font-size: 0.87rem;
  text-decoration: none;
  text-align: center;
  line-height: 2rem;
  background: #4b0082;
  color: #fff;
`;

const DeleteButton = styled.button`
  display: block;
  margin-top: 1rem;
  height: 2rem;
  width: 7rem;
  border-radius: 0.5rem;
  border: none;
  font-size: 0.87rem;
  text-decoration: none;
  text-align: center;
  line-height: 2rem;
  background: red;
  color: #fff;
`;

const NoSongContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  font-size: 0.5rem;
  color: #555;
  padding: 1rem;
  border: 2px dashed #ccc;
  border-radius: 0.5rem;
`;

const AddSongButton = styled(Link)`
  display: block;
  margin-top: 1rem;
  height: 2rem;
  width: 7rem;
  border-radius: 0.5rem;
  border: none;
  font-size: 0.87rem;
  text-decoration: none;
  text-align: center;
  line-height: 2rem;
  background: #4b0082;
  color: #fff;
`;

export default Songs;

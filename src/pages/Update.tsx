import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import styled from "styled-components";

import { useNavigate, useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../store/store";
import {
  updateSongStart,
  selectSongById,
} from "../app/features/songs/slice/songSlice";
import { message } from "antd";

const UpdateSong: React.FC = () => {
  const { id } = useParams<{ id: any }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const song = useAppSelector(selectSongById(id!));

  const onSubmit = async (values: any) => {
    try {
      if (!song) return;
      const updatedSong = { ...song, ...values };
      dispatch(updateSongStart(updatedSong));
      navigate("/songs");
      message.success("Song Updated successfully!");
    } catch (error) {
      console.error("Error adding song:", error);
    }
  };

  const validate = (values: any) => {
    const errors: { [key: string]: string } = {};
    if (!values.title) {
      errors.title = "Title is required";
    }
    if (!values.genre) {
      errors.genre = "Genre is required";
    }
    if (!values.artist) {
      errors.artist = "Artist is required";
    }
    if (!values.album) {
      errors.album = "Album is required";
    }
    return errors;
  };

  const displayContent = () => {
    if (song) {
      const initialValues = {
        title: song.title,
        genre: song.genre,
        artist: song.artist,
        album: song.album,
      };
      return (
        <Container>
          <FormContainer>
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validate={validate}
            >
              {() => (
                <Form>
                  <FormGroup>
                    <Label htmlFor="title"> Title: </Label>
                    <Input type="text" name="title" placeholder="Title" />
                    <StyledErrorMessage name="title" component="div" />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="genre">Genre: </Label>
                    <Input type="text" name="genre" placeholder="Genre" />
                    <StyledErrorMessage name="genre" component="div" />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="artist">Artist: </Label>
                    <Input type="text" name="artist" placeholder="Artist" />
                    <StyledErrorMessage name="artist" component="div" />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="album">Album: </Label>
                    <Input type="text" name="album" placeholder="Album" />
                    <StyledErrorMessage name="album" component="div" />
                  </FormGroup>
                  <SubmitButton type="submit">Update Song</SubmitButton>
                </Form>
              )}
            </Formik>
          </FormContainer>
        </Container>
      );
    }
  };
  return <div>{displayContent()}</div>;
};

const Container = styled.section`
  padding: 1rem;
  background-color: #f3f4f6;
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 2rem auto;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 2rem;
`;

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: bold;
  color: #4b5563;
  display: block;
  margin-bottom: 0.5rem;
  flex: 1; /* Take up equal space */
`;

const FormGroup = styled(Form)`
  display: flex;
  flex-direction: row;
  max-width: 400px;
  margin: auto;
`;

const Input = styled(Field)`
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  flex: 1; /* Take up equal space */
`;

const StyledErrorMessage = styled(ErrorMessage)`
  color: red;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 600px;
`;

export default UpdateSong;

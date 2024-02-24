import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store/store";
import { addSongStart } from "../app/features/songs/slice/songSlice";
import { message } from "antd";

const AddSongForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const initialValues = {
    title: "",
    genre: "",
    artist: "",
    album: "",
  };

  const onSubmit = async (values: any) => {
    try {
      dispatch(addSongStart(values));
      navigate("/songs");
      message.success("Song added successfully!");
    } catch (error: any) {
      console.log(error.message);
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
                <Label htmlFor="title"> Title:</Label>
                <Input type="text" name="title" placeholder="Enter Title" />
                <StyledErrorMessage name="title" component="div" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="genre">Genre:</Label>
                <Input type="text" name="genre" placeholder="Enter Genre" />
                <StyledErrorMessage name="genre" component="div" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="artist">Artist:</Label>
                <Input type="text" name="artist" placeholder="Enter Artist" />
                <StyledErrorMessage name="artist" component="div" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="album">Album:</Label>
                <Input type="text" name="album" placeholder="Enter Album" />
                <StyledErrorMessage name="album" component="div" />
              </FormGroup>
              <SubmitButton type="submit">Add Song</SubmitButton>
            </Form>
          )}
        </Formik>
      </FormContainer>
    </Container>
  );
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

const FormGroup = styled(Form)`
  display: flex;
  flex-direction: row;
  max-width: 400px;
  margin: auto;
`;

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: bold;
  color: #4b5563;
  display: block;
  margin-bottom: 0.5rem;
  flex: 1; /* Take up equal space */
`;

const Input = styled(Field)`
  width: 100%;
  padding: 0.7rem;
  font-size: 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.25rem;
  margin-bottom: 20px;
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

export default AddSongForm;

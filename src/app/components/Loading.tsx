import React from "react";
import styled from "styled-components";

// Loading component
const Loading: React.FC = () => {
  return (
    <Container>
      <Spinner />
    </Container>
  );
};

export default Loading;

// Define the styled components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #007bff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

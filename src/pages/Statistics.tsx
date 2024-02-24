import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import {
  selectStatistics,
  selectLoadingState,
  selectErrorState,
  getStatisticsStart,
} from "../app/features/songs/slice/statisticsSlice";
import Loading from "../app/components/Loading";
import styled from "styled-components";

const Statistic: React.FC = () => {
  const dispatch = useAppDispatch();
  const statistics = useAppSelector(selectStatistics);
  const isLoading = useAppSelector(selectLoadingState);
  const isError = useAppSelector(selectErrorState);

  useEffect(() => {
    dispatch(getStatisticsStart());
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  } else if (isError) {
    return <ErrorText>Error occurred. Please try again.</ErrorText>;
  }

  const displayStatistics = () => {
    if (statistics) {
      return (
        <StatisticsContainer>
          <Card>
            <CardTitle>Total Album</CardTitle>
            <CardContent>{statistics.totalAlbums}</CardContent>
          </Card>
          <Card>
            <CardTitle>Total Artist</CardTitle>
            <CardContent>{statistics.totalArtists}</CardContent>
          </Card>
          <Card>
            <CardTitle>Total Genres</CardTitle>
            <CardContent>{statistics.totalGenres}</CardContent>
          </Card>
          <Card>
            <CardTitle>Total Songs</CardTitle>
            <CardContent>{statistics.totalSongs}</CardContent>
          </Card>
        </StatisticsContainer>
      );
    }
  };

  return (
    <Container>
      <Title>Total Statistics</Title>
      {displayStatistics()}
    </Container>
  );
};

const Container = styled.div<{ isMobile?: boolean }>`
  padding: 20px;
  margin-left: ${({ isMobile }) => (isMobile ? "0" : "270px")};
  @media (max-width: 768px) {
    margin-left: 110px;
  }
`;

const Title = styled.h2`
  margin-bottom: 10px;
`;

const StatisticsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Card = styled.div<{ isMobile?: boolean }>`
  background-color: #ffffff;
  border-radius: 8px; /*to get curve*/
  border: 1px solid blue; /* Border color */
  padding: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  max-width: calc(15% - 20px);

  @media (max-width: 768px) {
    width: ${({ isMobile }) => (isMobile ? "200px" : "auto")};
    height: ${({ isMobile }) => (isMobile ? "auto" : "80px")};
  }
`;

const CardTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 8px;
`;

const CardContent = styled.p`
  font-size: 16px;
  color: #333333;
  text-align: center;
`;

const ErrorText = styled.h1`
  color: red;
`;

export default Statistic;

import styled from "styled-components";
import img1 from "../../../assets/img1.png";

const Home = () => {
  return (
    <Container>
      <Grid>
        <MyStyledDiv>
          <LeftContent>
            <Heading>Elevate Your Experience</Heading>
            <Paragraph>
              SongApp is a modern web application designed to provide users with
              a seamless and enjoyable experience for discovering and listening
              to music. The UI is crafted with simplicity, functionality, and
              aesthetics in mind, ensuring users can easily navigate through the
              app and explore their favorite songs.
            </Paragraph>
          </LeftContent>
        </MyStyledDiv>
        <RightContent>
          <Image src={img1} alt="My Image" />
        </RightContent>
      </Grid>
      <Grid>
        <FeatureCard>
          <FeatureHeading>SONGS</FeatureHeading>
          <FeatureDescription>Song Statistics</FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <FeatureHeading>ARTISTS</FeatureHeading>
          <FeatureDescription>Artist Statistics</FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <FeatureHeading>ALBUMS</FeatureHeading>
          <FeatureDescription>Album Statistics</FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <FeatureHeading>GENRES</FeatureHeading>
          <FeatureDescription>Genre Statistics</FeatureDescription>
        </FeatureCard>
      </Grid>
    </Container>
  );
};

const Container = styled.div<{ isMobile?: boolean }>`
  font-family: sans-serif;
  color: #fff;
  margin-top: 0px;
  margin-left: ${({ isMobile }) => (isMobile ? "80px" : "250px")};
  transition: margin-left 0.5s ease;
  border-radius: 10px;
  @media (max-width: 768px) {
    margin-left: 170px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 6px;
  margin: 10px;
  padding: 6px;
`;

const MyStyledDiv = styled.div`
  background-color: #007bff;
`;

const LeftContent = styled.div<{ isMobile?: boolean }>`
  padding: 12px;
  width: ${({ isMobile }) => (isMobile ? "80px" : "auto")};
  height: ${({ isMobile }) => (isMobile ? "40px" : "auto")};
`;

const RightContent = styled.div<{ isMobile?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  width: ${({ isMobile }) => (isMobile ? "80px" : "auto")};
  height: ${({ isMobile }) => (isMobile ? "80px" : "auto")};
`;

const Heading = styled.h2`
  font-size: 3xl;
  font-weight: bold;
  margin-bottom: 4px;
  line-height: 56px;
  text-align: center;
`;

const Paragraph = styled.p`
  font-family: Arial, sans-serif;
  margin-top: 4px;
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const FeatureCard = styled.div`
  background-color: #f8f9fa;
  padding: 6px;
  border-radius: md;
  border-width: 2px;
  margin-right: 20px;
  margin-top: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 2px solid #ddd;
`;

const FeatureHeading = styled.h3`
  font-size: xl;
  font-weight: bold;
  margin-bottom: 2px;
  color: #333;
  text-align: center;
`;

const FeatureDescription = styled.p`
  font-size: sm;
  color: #333;
`;

export default Home;

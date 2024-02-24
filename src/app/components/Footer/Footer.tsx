import React from "react";
import { styled } from "styled-components";

const Footer: React.FC = () => {
  return (
    <PageContainer>
      <ContentContainer></ContentContainer>
      <FooterContainer>
        <FooterText>&copy; 2024 Song App | All Rights Reserved</FooterText>
        <FooterText>
          Built with love by
          <FooterLink href="https://song-frontend.vercel.app">
            Song App
          </FooterLink>
        </FooterText>
      </FooterContainer>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 60vh;
  margin-left: 250px;
  @media (max-width: 768px) {
    margin-left: 0; /* Remove left margin for mobile view */
  }
`;

const ContentContainer = styled.div`
  flex: 1;
`;

const FooterContainer = styled.footer`
  background-color: #15171c;
  color: #fff;
  padding: 2rem 0;
  text-align: center;
`;

const FooterText = styled.p`
  font-size: 1rem;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    margin-left: 80px; /* Remove left margin for mobile view */
    font-size: 0.9rem;
  }
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: underline;
  margin-left: 0.5rem;
`;

export default Footer;

import styled from "styled-components";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import { DiReact } from "react-icons/di";
import React from "react";
import { FaBars } from "react-icons/fa";
import { color, flexbox, layout, space } from "styled-system";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <h1
            style={{
              marginLeft: "650px",
              color: "green",
            }}
          >
            SONG APP
          </h1>
        </Nav>
        <MobileIcon>
          <FaBars onClick={toggleMenu} />
        </MobileIcon>
        <SidebarNav isOpen={isOpen}>
          <SidebarWrap>
            <SideIcon to="/">
              <DiReact size="3rem" />
            </SideIcon>

            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;

const Nav = styled.div`
  background: #15171c;
  height: 80px;
  width: 100%;
  display: flex;
  margin-top: 0px;
  justify-content: flex-start;
  align-items: center;
`;

const SideIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 3rem;
  height: 100px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  ${space}
  ${layout}
  ${flexbox}
  ${color}
`;

const SidebarNav = styled.nav<{ isOpen: boolean }>`
  background: #15171c;
  width: 250px;
  height: 100vh;
  overflow-y: auto;
  overflow-y: auto; /* Enable vertical scrolling */
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ isOpen }) =>
    isOpen ? "0" : "-100%"}; /* Use isOpen prop to control sidebar visibility */
  transition: 350ms;
  z-index: 10;

  @media screen and (max-width: 768px) {
    width: 25%; /* Set full width for mobile view */
    left: ${({ isOpen }) =>
      isOpen ? "0" : "-100%"}; /* Adjust position for mobile view */
  }
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

export default Sidebar;

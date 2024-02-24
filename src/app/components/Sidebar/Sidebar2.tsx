import React from "react";
import {
  Nav,
  NavLink,
  NavbarContainer,
  Span,
  Items,
  NavLogo,
  SideItems,
  MobileIcon,
  MobileMenu,
  MobileLink,
} from "./SidebarStyle";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <DiCssdeck size="3rem" />
          <Span>Song App</Span>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={toggleMenu} />
        </MobileIcon>
        <SideItems>
          <Items>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/songs">Songs</NavLink>
            <NavLink to="/artists">Artists</NavLink>
            <NavLink to="/albums">Albums</NavLink>
            <NavLink to="/genres">Genres</NavLink>
          </Items>
        </SideItems>
        <MobileMenu isOpen={isOpen}>
          <MobileLink to="/" onClick={toggleMenu}>
            Home
          </MobileLink>
          <MobileLink to="/songs" onClick={toggleMenu}>
            Songs
          </MobileLink>
          <MobileLink to="/artists" onClick={toggleMenu}>
            Artists
          </MobileLink>
          <MobileLink to="/albums" onClick={toggleMenu}>
            Albums
          </MobileLink>
          <MobileLink to="/genres" onClick={toggleMenu}>
            Genres
          </MobileLink>
        </MobileMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;

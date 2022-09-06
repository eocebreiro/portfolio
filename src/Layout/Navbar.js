import React, { useState } from "react";
import { Spin as Hamburger } from "hamburger-react";

//Styled Components
import {
  Nav,
  Logo,
  HamburgerContainer,
  CenterMenu,
  CenterItem,
  MenuLink,
  RightMenu,
  RightItem,
} from "../components/Nav";
import Icon from "../components/Icons";

export const Navbar = ({ active }) => {
  //blue: #1363DF
  //green: #00b85b
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Logo to="#main">
        <span>{"Eric C"}</span>
        {"ebreiro"}
      </Logo>
      <HamburgerContainer>
        <Hamburger
          duration={0.3}
          easing="ease-in"
          rounded
          toggled={isOpen}
          onToggle={() => setIsOpen(!isOpen)}
          label="Show menu"
          color="#fff"
        />
      </HamburgerContainer>
      <CenterMenu isOpen={isOpen} onClick={() => setIsOpen(false)}>
        <CenterItem>
          <MenuLink to="#main" color="primary" active={active} smooth>
            Home
          </MenuLink>
        </CenterItem>
        <CenterItem>
          <MenuLink to="#about" color="primary" active={active} smooth>
            About
          </MenuLink>
        </CenterItem>
        <CenterItem>
          <MenuLink to="#projects" color="primary" active={active} smooth>
            Projects
          </MenuLink>
        </CenterItem>
        <CenterItem>
          <MenuLink to="#contact" color="primary" active={active} smooth>
            Contact
          </MenuLink>
        </CenterItem>
        <RightItem>
          <a
            href="https://github.com/eocebreiro"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="navgithub" height="30px" width="40px"></Icon>
          </a>
          <a
            href="https://www.linkedin.com/in/eric-cebreiro/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="navlinkedin" height="30px" width="30px"></Icon>
          </a>
        </RightItem>
      </CenterMenu>

      <RightMenu>
        <a
          href="https://github.com/eocebreiro"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="navgithub" height="30px" width="30px"></Icon>
        </a>
        <a
          href="https://www.linkedin.com/in/eric-cebreiro/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="navlinkedin" height="30px" width="30px"></Icon>
        </a>
      </RightMenu>
    </Nav>
  );
};

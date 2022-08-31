import React from "react";
//Styled
import { Link } from "../components/Link";
import { Nav } from "../components/Nav";
import { CenterDiv } from "../components/Div";
import { Logo } from "../components/Logo";
import { Span } from "../components/Span";

import Icon from "../components/Icons";
import { hover } from "@testing-library/user-event/dist/hover";

export const Navbar = ({ active }) => {
  //blue: #1363DF
  //green: #00b85b
  return (
    <Nav>
      <CenterDiv style={{ flex: "1 1 0", justifyContent: "left" }}>
        <Link to="#main" type="plain">
          <Logo />
        </Link>
      </CenterDiv>
      <CenterDiv style={{ flex: "2 1 0" }}>
        <Link to="#main" color="primary" size="S" active={active} smooth>
          Home
        </Link>
        <Link to="#about" color="primary" size="S" active={active} smooth>
          About
        </Link>
        <Link to="#projects" color="primary" size="S" active={active} smooth>
          Projects
        </Link>
        <Link to="#contact" color="primary" size="S" active={active} smooth>
          Contact
        </Link>
      </CenterDiv>
      <CenterDiv style={{ flex: "1 1 0", justifyContent: "right", gap: "0px" }}>
        <a
          href="https://github.com/eocebreiro"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="navgithub" height="30px"></Icon>
        </a>
        <a
          href="https://www.linkedin.com/in/eric-cebreiro/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="navlinkedin" height="30px"></Icon>
        </a>
      </CenterDiv>
    </Nav>
  );
};

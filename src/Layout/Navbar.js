//Styled
import { Link } from "../components/Link";
import { Nav } from "../components/Nav";
import { CenterDiv } from "../components/Div";
import { Logo } from "../components/P";
import { Span } from "../components/Span";

import Icon from "../components/Icons";
import { hover } from "@testing-library/user-event/dist/hover";

export const Navbar = () => {
  //blue: #1363DF
  //green: #00b85b
  return (
    <Nav>
      <CenterDiv style={{ flex: "1 1 0" }}>
        <Link to="#main" type="plain">
          <Logo>
            <Span color="primary">Eric C</Span>
            <Span>ebreiro</Span>
          </Logo>
        </Link>
      </CenterDiv>
      <CenterDiv style={{ flex: "2 1 0" }}>
        <Link to="#main" color="primary" size="S" smooth>
          Home
        </Link>
        <Link to="#skills" color="primary" size="S" smooth>
          Skills
        </Link>
        <Link to="#projects" color="primary" size="S" smooth>
          Projects
        </Link>
        <Link to="#contact" color="primary" size="S" smooth>
          Contact
        </Link>
      </CenterDiv>
      <CenterDiv style={{ flex: "1 1 0" }}>
        <a href="https://github.com/eocebreiro" target="_blank">
          <Icon name="github2" height="40px"></Icon>
        </a>
      </CenterDiv>
    </Nav>
  );
};

//Styled
import { Link } from "../components/Link";
import { Nav } from "../components/Nav";
import { CenterDiv } from "../components/Div";
import { Logo } from "../components/P";

export const Navbar = () => {
  //blue: #1363DF
  //green: #00b85b
  return (
    <Nav>
      <CenterDiv style={{ flex: "1 1 0" }}>
        <Link to="#main" type="plain">
          <Logo>
            <span style={{ color: "#00b85b" }}>Eric C</span>
            <span>ebreiro</span>
          </Logo>
        </Link>
      </CenterDiv>
      <CenterDiv style={{ flex: "2 1 0" }}>
        <Link to="#main" smooth>
          Home
        </Link>
        <Link to="#skills" smooth>
          Skills
        </Link>
        <Link to="#projects" smooth>
          Projects
        </Link>
        <Link to="#contact" smooth>
          Contact
        </Link>
      </CenterDiv>
      <CenterDiv style={{ flex: "1 1 0" }}></CenterDiv>
    </Nav>
  );
};

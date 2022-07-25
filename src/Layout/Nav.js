import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";
import { HashLink } from "react-router-hash-link";

export const Nav = () => {
  return (
    <nav
      style={{
        borderBottom: "1px solid black",
        height: "50px",
        width: "100%",
        position: "fixed",
        top: "0px",
        background: "#212121",
        zIndex: "1200",
      }}
    >
      <HashLink to="#main" smooth>
        go to skills
      </HashLink>
      <HashLink to="#projects" smooth>
        go to projects
      </HashLink>
      <HashLink to="#contact" smooth>
        go to contact
      </HashLink>
    </nav>
  );
};

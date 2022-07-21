import { HashLink } from "react-router-hash-link";

export const Nav = () => {
  return (
    <nav
      style={{
        border: "1px solid green",
        height: "50px",
        width: "100%",
        position: "fixed",
        top: "0px",
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

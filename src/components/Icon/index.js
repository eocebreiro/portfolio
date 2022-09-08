import React from "react";

import CssIcon from "./svg/css";
import FriebaseIcon from "./svg/firebase";
import GitIcon from "./svg/git";
import GithubIcon from "./svg/github";
import GithubIcon2 from "./svg/github2"; //delete
import GoogleCloudIcon from "./svg/googlecloud";
import HerokuIcon from "./svg/heroku";
import HtmlIcon from "./svg/html";
import JavaScriptIcon from "./svg/javascript";
import MongoDBIcon from "./svg/mongodb";
import NodeIcon from "./svg/node";
import PythonIcon from "./svg/python";
import ReactIcon from "./svg/react.js";
import ReduxIcon from "./svg/redux";
import SeleniumIcon from "./svg/selenium";
import NavGithubIcon from "./svg/navgithub";
import NavLinkedinIcon from "./svg/navlinkedin";

// Styled
import { Box, Container, FancyBox, Name } from "./styledIcons";

const tidy = (string) => string.toLowerCase().trim();

const getIcon = (name) => {
  switch (tidy(name)) {
    case "css":
      return <CssIcon />;
    case "firebase":
      return <FriebaseIcon />;
    case "git":
      return <GitIcon />;
    case "github":
      return <GithubIcon />;
    case "github2":
      return <GithubIcon2 />;
    case "googlecloud":
      return <GoogleCloudIcon />;
    case "heroku":
      return <HerokuIcon />;
    case "html":
      return <HtmlIcon />;
    case "javascript":
      return <JavaScriptIcon />;
    case "mongodb":
      return <MongoDBIcon />;
    case "node":
      return <NodeIcon />;
    case "python":
      return <PythonIcon />;
    case "react":
      return <ReactIcon />;
    case "redux":
      return <ReduxIcon />;
    case "selenium":
      return <SeleniumIcon />;
    case "navlinkedin":
      return <NavLinkedinIcon />;
    case "navgithub":
      return <NavGithubIcon />;

    default:
      return "";
  }
};
const getIconName = (name) => {
  switch (tidy(name)) {
    case "css":
      return "CSS 3";
    case "firebase":
      return "Firebase";
    case "git":
      return "Git";
    case "github":
      return "Github";
    case "googlecloud":
      return "Google Cloud";
    case "heroku":
      return "Heroku";
    case "html":
      return "HTML 5";
    case "javascript":
      return "Javascript";
    case "mongodb":
      return "MongoDB";
    case "node":
      return "NodeJS";
    case "python":
      return "Python";
    case "react":
      return "React";
    case "redux":
      return "Redux";
    case "selenium":
      return "Selenium";
    default:
      return "";
  }
};
export const Icon = ({ name, height = "100px", width = "100px" }) => (
  <Box height={height} width={width}>
    {getIcon(tidy(name))}
  </Box>
);

export const FancyIcon = ({ name, height = "100px", width = "100px" }) => (
  <FancyBox height={height} width={width}>
    <Container>
      <div style={{ height: height, width: width }}>{getIcon(tidy(name))}</div>
      <Name>{getIconName(tidy(name))}</Name>
    </Container>
  </FancyBox>
);

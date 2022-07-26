import React from "react";

import BootstrapIcon from "./svg/bootstrap";
import CssIcon from "./svg/css";
import ExpressIcon from "./svg/express";
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
import WordpressIcon from "./svg/wordpress";
import NavGithubIcon from "./svg/navgithub";
import NavLinkedinIcon from "./svg/navlinkedin";

// Styled
import {
  Box,
  IconContainer,
  FancyBox,
  Name,
  IconDiv,
  Wrapper,
} from "./styledIcons";
import { Fragment } from "react";

const tidy = (string) => string.toLowerCase().trim();

const getIcon = (name) => {
  switch (tidy(name)) {
    case "bootstrap":
      return <BootstrapIcon />;
    case "css":
      return <CssIcon />;
    case "express":
      return <ExpressIcon />;
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
    case "wordpress":
      return <WordpressIcon />;
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
    case "bootstrap":
      return "Bootstrap";
    case "css":
      return "CSS 3";
    case "express":
      return "Express";
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
    case "wordpress":
      return "Wordpress";
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
    <Wrapper>
      <IconDiv>{getIcon(tidy(name))}</IconDiv>
      {tidy(name) === "googlecloud" ? (
        <Fragment>
          <Name>Google</Name>
          <Name>Cloud</Name>
        </Fragment>
      ) : (
        <Name>{getIconName(tidy(name))}</Name>
      )}
    </Wrapper>
  </FancyBox>
);

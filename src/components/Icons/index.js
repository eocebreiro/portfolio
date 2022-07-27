import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";

import CssIcon from "./svg/css";
import FriebaseIcon from "./svg/firebase";
import GitIcon from "./svg/git";
import GithubIcon from "./svg/github";
import GithubIcon2 from "./svg/github2";
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

    default:
      return "";
  }
};

const Icons = ({ name, height = "100px" }) => (
  <div
    style={{ height: height, margin: "10px" }}
    id={`${tidy(name)}-logo-icon`}
  >
    {getIcon(tidy(name))}
  </div>
);

export default Icons;

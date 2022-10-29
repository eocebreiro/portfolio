import React, { Children, Fragment } from "react";

import { StyledLink } from "./StyledLink";
import { StyledHashLink } from "./StyledLink";
import { StyledButton } from "./StyledButton";

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const Button = (props) => {
  // Render an anchor tag (Link)
  let button = (
    <StyledButton color={props.color}>
      {Children.toArray(props.children)}
    </StyledButton>
  );

  // Render a hash link
  if (props.to) {
    if (props.to[0] === "#") {
      button = (
        <StyledHashLink
          to={props.to}
          type={props.type}
          width={props.width}
          color={props.color}
          smooth
        >
          {Children.toArray(props.children)}
        </StyledHashLink>
      );
    }
  }

  if (props.type) {
    // PDF Button
    if (props.type === "pdf") {
      button = (
        <StyledLink
          to={props.to}
          target={props.target}
          rel={props.rel}
          color={props.color}
        >
          {Children.toArray(props.children)}
        </StyledLink>
      );
    }

    // If a github button
    if (props.type === "github") {
      button = (
        <StyledButton color={props.color}>
          <FontAwesomeIcon icon={faGithub} fixedWidth /> Github
        </StyledButton>
      );
    }

    // If a website button
    if (props.type === "website") {
      button = (
        <StyledButton color={props.color}>
          <FontAwesomeIcon icon={faGlobe} fixedWidth /> Visit Site
        </StyledButton>
      );
    }
  }

  // If the Button has a handleRoute prop, we want to render a button
  if (props.onClick) {
    button = (
      <StyledButton
        onClick={props.onClick}
        type={props.type}
        width={props.width}
        color={props.color}
      >
        {Children.toArray(props.children)}
      </StyledButton>
    );
  }

  return <Fragment>{button}</Fragment>;
};

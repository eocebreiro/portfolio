import React, { Children, Fragment } from "react";
import PropTypes from "prop-types";

import { StyledLink } from "./StyledLink";
import { StyledHashLink } from "./StyledLink";
import { StyledButton } from "./StyledButton";

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

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
  // If a github button
  if (props.color) {
    if (props.color === "github") {
      button = (
        <StyledButton color={props.color}>
          <FontAwesomeIcon icon="fa-brands fa-github" /> Github
        </StyledButton>
      );
    }
    if (props.color === "website") {
      button = (
        <StyledButton color={props.color}>
          {" "}
          <FontAwesomeIcon icon={faGlobe} /> Visit Site
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

Button.propTypes = {
  handleRoute: PropTypes.func,
  to: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

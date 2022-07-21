import React, { Children, Fragment } from "react";
import PropTypes from "prop-types";

import { StyledLink } from "./StyledLink";
import { StyledHashLink } from "./StyledLink";
import { StyledButton } from "./StyledButton";

export const Button = (props) => {
  // Render an anchor tag (Link)
  let button = (
    <StyledLink to={props.link}>{Children.toArray(props.children)}</StyledLink>
  );
  if (props.link[0] === "#") {
    button = (
      <StyledHashLink to={props.link} smooth>
        {Children.toArray(props.children)}
      </StyledHashLink>
    );
  }
  // If the Button has a handleRoute prop, we want to render a button
  if (props.handleRoute) {
    button = (
      <StyledButton onClick={props.handleRoute}>
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

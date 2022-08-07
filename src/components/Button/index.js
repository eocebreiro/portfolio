import React, { Children, Fragment } from "react";
import PropTypes from "prop-types";

import { StyledLink } from "./StyledLink";
import { StyledHashLink } from "./StyledLink";
import { StyledButton } from "./StyledButton";

export const Button = (props) => {
  // Render an anchor tag (Link)
  let button = (
    <StyledLink to={props.to} onClick={props.onClick} width={props.width}>
      {Children.toArray(props.children)}
    </StyledLink>
  );

  // Render a hash link
  if (props.to) {
    if (props.to[0] === "#") {
      button = (
        <StyledHashLink
          to={props.to}
          type={props.type}
          width={props.width}
          smooth
        >
          {Children.toArray(props.children)}
        </StyledHashLink>
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

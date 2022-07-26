import React, { Children, Fragment } from "react";
import { StyledLink, StyledHashLink } from "./styles";

export const Link = (props) => {
  // Render an anchor tag (Link)
  let link = (
    <StyledLink to={props.to} type={props.type}>
      {Children.toArray(props.children)}
    </StyledLink>
  );
  if (props.to[0] === "#") {
    link = (
      <StyledHashLink to={props.to} type={props.type} smooth>
        {Children.toArray(props.children)}
      </StyledHashLink>
    );
  }

  return <Fragment>{link}</Fragment>;
};

import React, { Children, Fragment } from "react";
import PropTypes from "prop-types";
import { LogoSpan } from "../Span";

export const Logo = () => {
  let logo = (
    <Fragment>
      <LogoSpan size="logo" color="primary">
        {"Eric C"}
      </LogoSpan>
      <LogoSpan size="logo">{"ebreiro"}</LogoSpan>
    </Fragment>
  );

  return <Fragment>{logo}</Fragment>;
};

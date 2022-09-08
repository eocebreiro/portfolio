import React, { Children } from "react";
import { Fragment } from "react";
import { Title, Container } from "./StyledTitle";

export const SectionHeading = (props) => {
  // Render an anchor tag (Link)

  return (
    <Fragment>
      <Container>
        <Title>{Children.toArray(props.children)}</Title>
      </Container>
    </Fragment>
  );
};

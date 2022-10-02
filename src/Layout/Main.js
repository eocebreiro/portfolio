import React from "react";

// Components
import { LandingSection, Col } from "../components/Div";
import { PTitle, Span } from "../components/P";
import { Button } from "../components/Button";
import { SlideRight, SlideLeft, SlideUp } from "../components/Animations";

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export const Main = () => {
  return (
    <LandingSection id="main">
      <SlideRight>
        <PTitle size="title">
          <Span>Hello, I'm </Span>
          <Span color="primary">Eric</Span>
          <Span>.</Span>
        </PTitle>
      </SlideRight>
      <SlideLeft>
        <PTitle size="title">I'm a full stack web developer.</PTitle>
      </SlideLeft>
      <Col>
        <SlideUp>
          <Button to="#about" color="primary">
            <FontAwesomeIcon icon={faAngleDown} fixedWidth /> Learn More
          </Button>
        </SlideUp>
      </Col>
    </LandingSection>
  );
};

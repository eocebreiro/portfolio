import React from "react";

// Components
import { Section, Col } from "../components/Div";
import { PTitle, Span } from "../components/P";
import { Button } from "../components/Button";
import { SlideRight, SlideLeft, SlideUp } from "../components/Animations";

export const Main = () => {
  return (
    <Section id="main">
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
        {
          //<Button to="#contact" type="main-page">
          // Download Resume
          // </Button>
        }
        <SlideUp>
          <Button to="#about" color="primary">
            Learn More
          </Button>
        </SlideUp>
      </Col>
    </Section>
  );
};

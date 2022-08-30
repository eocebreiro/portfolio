import React from "react";

// Components
import { Showcase, DarkOverlay } from "../components/Showcase";
import { Section, MainPageContent, Row, Col } from "../components/Div";
import { H1 } from "../components/H1";
import { PTitle, Span } from "../components/P";
import { Button } from "../components/Button";

export const Main = () => {
  return (
    <Section id="main">
      <PTitle size="title">
        <Span>Hello, I'm </Span>
        <Span color="primary">Eric</Span>
        <Span>.</Span>
      </PTitle>
      <PTitle size="title">I'm a full stack web developer.</PTitle>
      <Col>
        {
          //<Button to="#contact" type="main-page">
          // Download Resume
          // </Button>
        }
        <Button to="#about" type="main-page">
          Learn More
        </Button>
      </Col>
    </Section>
  );
};

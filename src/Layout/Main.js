import React from "react";

// Components
import { Showcase, DarkOverlay } from "../components/Showcase";
import { Section, MainPageContent, Row, Col } from "../components/Div";
import { H1 } from "../components/H1";
import { P } from "../components/P";
import { Button } from "../components/Button";
import { Span } from "../components/Span";

export const Main = () => {
  return (
    <Showcase>
      <DarkOverlay>
        <Section background="none" id="main">
          <MainPageContent>
            <Col>
              <Span size="lead">Hello, I'm</Span>
              <H1 size="L" color="primary">
                Eric Cebreiro
              </H1>
              <P size="N">
                I'm full-stack web developer who values learning and growing
                with people, teams, and technologies. My goal is to create
                engaging experiences for users, with a fine balance of
                technology and design.
              </P>{" "}
              <Button to="#contact" type="main-page">
                Download Resume
              </Button>
              <Button to="#contact" type="main-page">
                Contact Me
              </Button>
            </Col>
          </MainPageContent>
        </Section>
      </DarkOverlay>
    </Showcase>
  );
};

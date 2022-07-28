import React from "react";

// Components
import { Showcase, DarkOverlay } from "../components/Showcase";
import { Section, LeftSideDiv, ColDiv, RowDiv } from "../components/Div";
import { H1 } from "../components/H1";
import { P } from "../components/P";
import { Button } from "../components/Button";

export const Main = () => {
  return (
    <Showcase>
      <DarkOverlay>
        <Section background="none" id="main">
          <LeftSideDiv>
            <RowDiv>
              <ColDiv>
                <P size="lead">Hello, I'm</P>
                <H1 size="L" color="primary">
                  Eric Cebreiro
                </H1>
                <P size="N">
                  I'm full-stack web developer who values learning and growing
                  with people, teams, and technologies. My goal is to create
                  engaging experiences for users, with a fine balance of
                  technology and design.
                </P>{" "}
              </ColDiv>
            </RowDiv>
            <RowDiv>
              <Button to="#contact" color="primary">
                Download Resume
              </Button>
              <Button to="#contact" color="primary">
                Contact Me
              </Button>
            </RowDiv>
          </LeftSideDiv>
        </Section>
      </DarkOverlay>
    </Showcase>
  );
};

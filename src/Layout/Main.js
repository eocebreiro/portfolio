import React from "react";
// Components
import { Div, Section } from "../components/Div";
import { H1 } from "../components/H1";
import { P } from "../components/P";
import { Button } from "../components/Button";

export const Main = () => {
  return (
    <Section id="main">
      <Div>
        <P>Hello, I'm</P>
        <H1>Eric Cebreiro</H1>
        <P>
          I'm a self-taught web developer who values learning and growing with
          people, teams, and technologies. My goal is to create engaging
          experiences for users, with a fine balance of technology and design.
        </P>
      </Div>
      <Div>
        <Button link="#contact">Contact Me</Button>
        <Button link="#contact">Resume</Button>
      </Div>
    </Section>
  );
};

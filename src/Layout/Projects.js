import { Div, Section } from "../components/Div";
import { H1 } from "../components/H1";
import { P } from "../components/P";

export const Projects = () => {
  return (
    <Section id="projects">
      <Div>
        <H1>Projects</H1>
        <P>Collections of personal projects</P>
      </Div>
      <Div>
        <Div>Project 1</Div>
        <Div>Project 2</Div>
        <Div>Project 3</Div>
        <Div>Project 4</Div>
      </Div>
    </Section>
  );
};

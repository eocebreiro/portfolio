import { Div, Section } from "../components/Div";
import { PCenter } from "../components/P";
import { H1 } from "../components/H1";

export const Projects = () => {
  return (
    <Section id="projects">
      <H1>Projects</H1>
      <PCenter>Collections of personal projects</PCenter>
      <Div style={{ height: "200px" }}>Project 1</Div>
      <Div style={{ height: "200px" }}>Project 2</Div>
      <Div style={{ height: "200px" }}>Project 3</Div>
      <Div style={{ height: "200px" }}>Project 4</Div>
    </Section>
  );
};

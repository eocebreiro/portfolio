import { Div, Section, ContentWrapper } from "../components/Div";
import { H1 } from "../components/H1";
import { PCenter } from "../components/P";

export const Projects = () => {
  return (
    <Section background="#fff" id="projects">
      <ContentWrapper>
        <H1>Projects</H1>
        <PCenter>Collections of personal projects</PCenter>
        <Div>Project 1</Div>
        <Div>Project 2</Div>
        <Div>Project 3</Div>
        <Div>Project 4</Div>
      </ContentWrapper>
    </Section>
  );
};

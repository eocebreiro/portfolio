import { Div, Section, ContentWrapper } from "../components/Div";
import { PCenter } from "../components/P";
import { SectionHeading } from "../components/SectionHeading";

export const Projects = () => {
  return (
    <Section background="#fff" id="projects">
      <ContentWrapper>
        <SectionHeading>Projects</SectionHeading>
        <PCenter>Collections of personal projects</PCenter>
        <Div style={{ height: "200px" }}>Project 1</Div>
        <Div style={{ height: "200px" }}>Project 2</Div>
        <Div style={{ height: "200px" }}>Project 3</Div>
        <Div style={{ height: "200px" }}>Project 4</Div>
      </ContentWrapper>
    </Section>
  );
};

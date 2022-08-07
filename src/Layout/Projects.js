import { Div, Section, ContentWrapper } from "../components/Div";
import { H1 } from "../components/H1";
import { P } from "../components/P";

export const Projects = () => {
  return (
    <Section background="#fff" id="projects">
      <ContentWrapper>
        <H1 size="L">Projects</H1>
        <P size="N">Collections of personal projects</P>
        <Div>Project 1</Div>
        <Div>Project 2</Div>
        <Div>Project 3</Div>
        <Div>Project 4</Div>
      </ContentWrapper>
    </Section>
  );
};

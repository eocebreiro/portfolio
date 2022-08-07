import {
  Div,
  Section,
  ContentWrapper,
  RowDiv,
  ColDiv,
} from "../components/Div";
import { H1 } from "../components/H1";
import { P } from "../components/P";

import Icon from "../components/Icons";

const height = "100px";

export const Skills = () => {
  return (
    <Section background="#edeff1" id="skills">
      <ContentWrapper>
        <H1 size="L">Skills</H1>
        <P size="N">
          Technologies I've worked with. Technologies I've worked with.
          Technologies I've worked with. Technologies I've worked with.
          Technologies I've worked with. Technologies I've worked with.
          Technologies I've worked with. Technologies I've worked with.
          Technologies I've worked with. Technologies I've worked with.
          Technologies I've worked with. Technologies I've worked with.
          Technologies I've worked with. Technologies I've worked with.
          Technologies I've worked with. Technologies I've worked with.
          Technologies I've worked with. Technologies I've worked with.
        </P>
        <Icon name="react" height={height}></Icon>
        <Icon name="redux" height={height}></Icon>
        <Icon name="javascript" height={height}></Icon>
        <Icon name="html" height={height}></Icon>
        <Icon name="css" height={height}></Icon>
        <Icon name="node" height={height}></Icon>
        <Icon name="git" height={height}></Icon>
        <Icon name="github" height={height}></Icon>
        <Icon name="python" height={height}></Icon>
        <Icon name="mongodb" height={height}></Icon>
        <Icon name="heroku" height={height}></Icon>
        <Icon name="googlecloud" height={height}></Icon>
        <Icon name="firebase" height={height}></Icon>
        <Icon name="selenium" height={height}></Icon>
      </ContentWrapper>
    </Section>
  );
};

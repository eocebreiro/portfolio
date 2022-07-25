import { Div, Section } from "../components/Div";
import { H1 } from "../components/H1";
import { P } from "../components/P";

import Icon from "../components/Icons";

const height = "65px";

export const Skills = () => {
  return (
    <Section background="#edeff1" id="skills">
      <Div>
        <H1>Skills</H1>
        <P>Technologies I've worked with.</P>
      </Div>
      <Div style={{ display: "flex" }}>
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
      </Div>
    </Section>
  );
};

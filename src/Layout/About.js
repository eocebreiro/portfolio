import {
  Div,
  Section,
  ContentWrapper,
  RowDiv,
  ColDiv,
  AboutContainer,
  TextContainer,
  IconContainer,
  ProfileContainer,
  ProfilePhoto,
  ProfileLinks,
  ProfileButton,
  IconColLeft,
  IconColRight,
  IconColMiddle1,
  IconColMiddle2,
} from "../components/Div";
import { H1 } from "../components/H1";
import { P, PCenter } from "../components/P";
import { Button } from "../components/Button";
import { ProfileImg } from "../components/ProfileImg";

import { FancyIcon } from "../components/Icon";

const height = "100px";

export const About = () => {
  return (
    <Section background="#edeff1" id="about">
      <ContentWrapper>
        <H1>About</H1>

        <AboutContainer>
          <ProfileContainer>
            <ProfilePhoto>
              <ProfileImg />
            </ProfilePhoto>
            <ProfileLinks>
              <P>Name: Eric Cebreiro</P>
              <P>Email: eoebreiro@gmail.com</P>
              <P>
                LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/eric-cebreiro/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  eocebreiro
                </a>
              </P>
              <ProfileButton>
                <Button to="#contact" color="primary">
                  Download Resume
                </Button>
              </ProfileButton>
            </ProfileLinks>
          </ProfileContainer>
          <TextContainer>
            <P>
              I'm full-stack web developer who values learning and growing with
              people, teams, and technologies. My goal is to create engaging
              experiences for users, with a fine balance of technology and
              design.
            </P>
            <br></br>
            <br></br>
            <PCenter>
              Here are some of the technologies I am currently using:
            </PCenter>
            <br></br>
          </TextContainer>
        </AboutContainer>
        <IconContainer>
          <IconColLeft>
            <FancyIcon name="react" height={height}></FancyIcon>
            <FancyIcon name="redux" height={height}></FancyIcon>
            <FancyIcon name="javascript" height={height}></FancyIcon>
          </IconColLeft>
          <IconColMiddle1>
            <FancyIcon name="html" height={height}></FancyIcon>
            <FancyIcon name="css" height={height}></FancyIcon>
            <FancyIcon name="node" height={height}></FancyIcon>
            <FancyIcon name="git" height={height}></FancyIcon>
          </IconColMiddle1>
          <IconColMiddle2>
            <FancyIcon name="github" height={height}></FancyIcon>
            <FancyIcon name="python" height={height}></FancyIcon>
            <FancyIcon name="mongodb" height={height}></FancyIcon>
            <FancyIcon name="heroku" height={height}></FancyIcon>
          </IconColMiddle2>
          <IconColRight>
            <FancyIcon name="googlecloud" height={height}></FancyIcon>
            <FancyIcon name="firebase" height={height}></FancyIcon>
            <FancyIcon name="selenium" height={height}></FancyIcon>
          </IconColRight>
        </IconContainer>
      </ContentWrapper>
    </Section>
  );
};

import {
  Section,
  ContentWrapper,
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
            <FancyIcon name="react"></FancyIcon>
            <FancyIcon name="redux"></FancyIcon>
            <FancyIcon name="javascript"></FancyIcon>
          </IconColLeft>
          <IconColMiddle1>
            <FancyIcon name="html"></FancyIcon>
            <FancyIcon name="css"></FancyIcon>
            <FancyIcon name="node"></FancyIcon>
            <FancyIcon name="git"></FancyIcon>
          </IconColMiddle1>
          <IconColMiddle2>
            <FancyIcon name="github"></FancyIcon>
            <FancyIcon name="python"></FancyIcon>
            <FancyIcon name="mongodb"></FancyIcon>
            <FancyIcon name="heroku"></FancyIcon>
          </IconColMiddle2>
          <IconColRight>
            <FancyIcon name="googlecloud"></FancyIcon>
            <FancyIcon name="firebase"></FancyIcon>
            <FancyIcon name="selenium"></FancyIcon>
          </IconColRight>
        </IconContainer>
      </ContentWrapper>
    </Section>
  );
};

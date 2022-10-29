import {
  Section,
  AboutContainer,
  TextContainer,
  IconContainer,
  ProfileContainer,
  ProfilePhoto,
  ProfileLinks,
  ContactButton,
  ResumeButton,
  IconText,
  IconColLeft,
  IconColRight,
  IconColMiddle1,
  IconColMiddle2,
} from "../components/Div";
import { H1 } from "../components/H1";
import { PAbout, PCenter } from "../components/P";
import { Button } from "../components/Button";
import { ProfileImg } from "../components/ProfileImg";
import { FancyIcon } from "../components/Icon";

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faEnvelope } from "@fortawesome/free-solid-svg-icons";

// Resume
import resume from "../documents/resume.pdf";

export const About = () => {
  return (
    <Section id="about">
      <H1>About</H1>
      <AboutContainer>
        <ProfileContainer>
          <ProfilePhoto>
            <ProfileImg />
          </ProfilePhoto>
          <ProfileLinks>
            <PCenter>Name: Eric Cebreiro</PCenter>
            <PCenter>Email: eoebreiro@gmail.com</PCenter>
            <PCenter>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/eric-cebreiro/"
                target="_blank"
                rel="noopener noreferrer"
              >
                eocebreiro
              </a>
            </PCenter>
            <ContactButton>
              <Button to="#contact" color="primary">
                <FontAwesomeIcon icon={faEnvelope} fixedWidth /> Contact
              </Button>
            </ContactButton>
            <ResumeButton>
              <Button
                type="pdf"
                to={resume}
                target="_blank"
                rel="noreferrer"
                color="primary"
              >
                <FontAwesomeIcon icon={faDownload} fixedWidth /> Download Resume
              </Button>
            </ResumeButton>
          </ProfileLinks>
        </ProfileContainer>
        <TextContainer>
          <PAbout>
            I'm full-stack web developer who values learning and growing with
            people, teams, and technologies. I love spending time coding and
            encountering new challenges. My goal is to create engaging
            experiences for users, with a fine balance of technology and design.
          </PAbout>
          <br />
          <PAbout>
            My previous career as a university professor allowed me to be
            collaborative and creative, which is something I now enjoy bringing
            to my code. Being in education for 10 years has taught me it's never
            too late to learn. I'm excited to make the leap and continue
            refining my skills with the right company.
          </PAbout>
        </TextContainer>

        <IconContainer>
          <IconText>
            <PCenter>
              Here are some of the technologies I am currently using:
            </PCenter>
            <br />
          </IconText>
          <IconColLeft>
            <FancyIcon name="javascript"></FancyIcon>
            <FancyIcon name="html"></FancyIcon>
            <FancyIcon name="css"></FancyIcon>
          </IconColLeft>
          <IconColMiddle1>
            <FancyIcon name="react"></FancyIcon>
            <FancyIcon name="node"></FancyIcon>
            <FancyIcon name="redux"></FancyIcon>
            <FancyIcon name="git"></FancyIcon>{" "}
            <FancyIcon name="python"></FancyIcon>
          </IconColMiddle1>
          <IconColMiddle2>
            <FancyIcon name="bootstrap"></FancyIcon>
            <FancyIcon name="express"></FancyIcon>
            <FancyIcon name="mongodb"></FancyIcon>{" "}
            <FancyIcon name="github"></FancyIcon>
            <FancyIcon name="selenium"></FancyIcon>
          </IconColMiddle2>
          <IconColRight>
            <FancyIcon name="googlecloud"></FancyIcon>
            <FancyIcon name="firebase"></FancyIcon>
            <FancyIcon name="wordpress"></FancyIcon>
          </IconColRight>
        </IconContainer>
      </AboutContainer>
    </Section>
  );
};

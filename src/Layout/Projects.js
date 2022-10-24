import {
  Section,
  ProjectPhoto,
  ProjectInfo,
  ProjectRow,
  ButtonBox,
  ButtonWebsite,
  ButtonGithub,
  Image,
  MadeWith,
} from "../components/Div";
import { P, PrimaryColor, SubHeading } from "../components/P";
import { H1 } from "../components/H1";
import { Button } from "../components/Button";
import { Img } from "../components/Img";
import { Icon } from "../components/Icon";

// Project Images
import pokedexImg from "../img/pokedex.png";
import katrinacebreiroImg from "../img/katrinacebreiro.png";
import ericcImg from "../img/ericc.png";

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const Projects = () => {
  let height = "35px";
  let width = "35px";
  return (
    <Section id="projects">
      <H1>Projects</H1>
      <ProjectRow>
        <ProjectInfo>
          <SubHeading>Draft League</SubHeading>
          <MadeWith>
            <Icon name="react" height={height} width={width} />
            <Icon name="redux" height={height} width={width} />
            <Icon name="javascript" height={height} width={width} />
            <Icon name="node" height={height} width={width} />{" "}
            <Icon name="express" height={height} width={width} />
            <Icon name="mongodb" height={height} width={width} />
            <Icon name="googlecloud" height={height} width={width} />
            <Icon name="firebase" height={height} width={width} />
            <Icon name="heroku" height={height} width={width} />
          </MadeWith>
          <P>
            My most current and on going project is a fantasy draft website for
            Major League Soccer (MLS). Users will be able to play with their
            friends and take turns drafting players to be on their fantasy team.
            Each week those players will earn points depending on how they do in
            their game.
          </P>
          <br />
          <P>
            This project is built with <PrimaryColor>react</PrimaryColor> using{" "}
            <PrimaryColor>redux</PrimaryColor> in order to manage the state. The
            backend uses <PrimaryColor>NodeJS</PrimaryColor> and{" "}
            <PrimaryColor>Express</PrimaryColor> for authentication, validation,
            and interacting with <PrimaryColor>MongoDB</PrimaryColor>. The
            application uses a Sports API to get its data and uses{" "}
            <PrimaryColor>firebase functions</PrimaryColor> and{" "}
            <PrimaryColor>Google Cloud Scheduler</PrimaryColor> to time when
            this happens since the data constantly changes depending when the
            matches occur.
          </P>
          <ButtonBox>
            <ButtonWebsite>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Button color="primary" type="website" />
              </a>
            </ButtonWebsite>
            <ButtonGithub>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Button color="reverse" type="github" />
              </a>
            </ButtonGithub>
          </ButtonBox>
        </ProjectInfo>
        <ProjectPhoto>Coming Soon!</ProjectPhoto>
      </ProjectRow>
      <ProjectRow>
        <ProjectInfo>
          <SubHeading>Pokedex</SubHeading>
          <MadeWith>
            <Icon name="react" height={height} width={width} />
            <Icon name="bootstrap" height={height} width={width} />{" "}
            <Icon name="javascript" height={height} width={width} />
            <Icon name="css" height={height} width={width} />
          </MadeWith>
          <P>
            Pokedex uses an API to get data for all the current pokemon. The
            user can search either by name or number and select on a specific
            pokemon to get more details. The web app was built with{" "}
            <PrimaryColor>react</PrimaryColor> and{" "}
            <PrimaryColor>bootstrap</PrimaryColor> and utilized the PokeApi.co
            API for its data.{" "}
          </P>
          <ButtonBox>
            <ButtonWebsite>
              <a
                href="https://eocebreiro.github.io/pokedex/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button color="primary" type="website" />
              </a>
            </ButtonWebsite>
            <ButtonGithub>
              <a
                href="https://github.com/eocebreiro/pokedex"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button color="reverse" type="github" />
              </a>
            </ButtonGithub>
          </ButtonBox>
        </ProjectInfo>
        <ProjectPhoto>
          <Image>
            <Img src={pokedexImg} />
          </Image>
        </ProjectPhoto>
      </ProjectRow>
      <ProjectRow>
        <ProjectInfo>
          <SubHeading>My Game Library</SubHeading>
          <MadeWith>
            <Icon name="react" height={height} width={width} />
            <Icon name="javascript" height={height} width={width} />
            <Icon name="bootstrap" height={height} width={width} />
            <Icon name="mongodb" height={height} width={width} />
            <Icon name="express" height={height} width={width} />
          </MadeWith>
          <P>
            My Game Library is an app that helps you keep track of the your
            backlog, wishlist and the games you have played. The backend was
            built using <PrimaryColor>Express</PrimaryColor> and following
            common <PrimaryColor>REST API</PrimaryColor> standards and{" "}
            <PrimaryColor>CRUD</PrimaryColor> functions. The front end was built
            using <PrimaryColor>React</PrimaryColor>,{" "}
            <PrimaryColor>Bootstrap</PrimaryColor> and{" "}
            <PrimaryColor>Context API</PrimaryColor>.
          </P>
          <ButtonBox>
            <ButtonWebsite>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Button color="primary" type="website" />
              </a>
            </ButtonWebsite>
            <ButtonGithub>
              <a
                href="https://github.com/eocebreiro/my-game-library"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button color="reverse" type="github" />
              </a>
            </ButtonGithub>
          </ButtonBox>
        </ProjectInfo>
        <ProjectPhoto>Coming Soon!</ProjectPhoto>
      </ProjectRow>
      <ProjectRow>
        <ProjectInfo>
          <SubHeading>Personal Portfolio</SubHeading>
          <P>
            <MadeWith>
              <Icon name="react" height={height} width={width} />
              <Icon name="javascript" height={height} width={width} />
            </MadeWith>
          </P>
          <P>
            A single page completely responsive web portfolio to showcase
            projects, skills, and many more information. Built with
            <PrimaryColor> React</PrimaryColor> and{" "}
            <PrimaryColor> Styled-Components</PrimaryColor>.
          </P>
          <ButtonBox>
            <ButtonWebsite>
              <a
                href="https://ericc.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button color="primary">
                  {" "}
                  <FontAwesomeIcon icon={faGlobe} fixedWidth /> Visit Site
                </Button>
              </a>
            </ButtonWebsite>
            <ButtonGithub>
              <a
                href="https://github.com/eocebreiro/portfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button color="reverse" type="github" />
              </a>
            </ButtonGithub>
          </ButtonBox>
        </ProjectInfo>
        <ProjectPhoto>
          <Image>
            <Img src={ericcImg} />
          </Image>
        </ProjectPhoto>
      </ProjectRow>
      <ProjectRow>
        <ProjectInfo>
          <SubHeading>Client Portfolio (Wordpress)</SubHeading>
          <MadeWith>
            <Icon name="wordpress" height={height} width={width} />
            <Icon name="html" height={height} width={width} />
            <Icon name="css" height={height} width={width} />
          </MadeWith>
          <P>
            A website made from <PrimaryColor>wordpress</PrimaryColor> to
            display the client's independent films. While a template was used,{" "}
            <PrimaryColor>CSS</PrimaryColor> and{" "}
            <PrimaryColor>HTML</PrimaryColor> were needed to personalize the
            site according to the clients needs.
          </P>
          <ButtonBox>
            <ButtonWebsite>
              <a
                href="https://katrinacebreiro.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button color="primary" type="website" />
              </a>
            </ButtonWebsite>
          </ButtonBox>
        </ProjectInfo>
        <ProjectPhoto>
          <Image>
            <Img src={katrinacebreiroImg} />
          </Image>
        </ProjectPhoto>
      </ProjectRow>
    </Section>
  );
};

import {
  Div,
  Section,
  ProjectContainer,
  ProjectPhoto,
  ProjectInfo,
  ProjectRow,
  ButtonBox,
  ButtonWebsite,
  ButtonGithub,
  Image,
} from "../components/Div";
import { P, PrimaryColor, SubHeading } from "../components/P";
import { H1 } from "../components/H1";
import { Button } from "../components/Button";
import { Img } from "../components/Img";

// Project Images
import pokedexImg from "../img/pokedex.png";
import katrinacebreiroImg from "../img/katrinacebreiro.png";
import ericcImg from "../img/ericc.png";

export const Projects = () => {
  return (
    <Section id="projects">
      <H1>Projects</H1>
      <ProjectRow>
        <ProjectInfo>
          <SubHeading>Draft League</SubHeading>
          <P>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.{" "}
          </P>
          <ButtonBox>
            <ButtonWebsite>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Button color="website" />
              </a>
            </ButtonWebsite>
            <ButtonGithub>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Button color="github" />
              </a>
            </ButtonGithub>
          </ButtonBox>
        </ProjectInfo>
        <ProjectPhoto>asdf</ProjectPhoto>
      </ProjectRow>
      <ProjectRow>
        <ProjectInfo>
          <SubHeading>Pokedex</SubHeading>
          <P>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.{" "}
          </P>
          <ButtonBox>
            <ButtonWebsite>
              <a
                href="https://eocebreiro.github.io/pokedex/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button color="website" />
              </a>
            </ButtonWebsite>
            <ButtonGithub>
              <a
                href="https://github.com/eocebreiro/pokedex"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button color="github" />
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
          <SubHeading>My Game Tracker</SubHeading>
          <P>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.{" "}
          </P>
          <ButtonBox>
            <ButtonWebsite>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Button color="website" />
              </a>
            </ButtonWebsite>
            <ButtonGithub>
              <a
                href="https://github.com/eocebreiro/my-gaming-tracker"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button color="github" />
              </a>
            </ButtonGithub>
          </ButtonBox>
        </ProjectInfo>
        <ProjectPhoto>TESSST</ProjectPhoto>
      </ProjectRow>
      <ProjectRow>
        <ProjectInfo>
          <SubHeading>Personal Portfolio</SubHeading>
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
                <Button color="website" />
              </a>
            </ButtonWebsite>
            <ButtonGithub>
              <a
                href="https://github.com/eocebreiro/portfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button color="github" />
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
          <P>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.{" "}
          </P>
          <ButtonBox>
            <ButtonWebsite>
              <a
                href="https://katrinacebreiro.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button color="website" />
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

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
} from "../components/Div";

import { P, SubHeading } from "../components/P";
import { PCenter } from "../components/P";
import { H1 } from "../components/H1";
import { Button } from "../components/Button";

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
                <Button color="primary">Website</Button>
              </a>
            </ButtonWebsite>
            <ButtonGithub>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Button color="primary">Github</Button>
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
                <Button color="primary">Website</Button>
              </a>
            </ButtonWebsite>
            <ButtonGithub>
              <a
                href="https://github.com/eocebreiro/pokedex"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button color="primary">Github</Button>
              </a>
            </ButtonGithub>
          </ButtonBox>
        </ProjectInfo>
        <ProjectPhoto></ProjectPhoto>
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
                <Button color="primary">Website</Button>
              </a>
            </ButtonWebsite>
            <ButtonGithub>
              <a
                href="https://github.com/eocebreiro/my-gaming-tracker"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button color="primary">Github</Button>
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
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.{" "}
          </P>
          <ButtonBox>
            <ButtonWebsite>
              <a
                href="https://ericc.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button color="primary">Website</Button>
              </a>
            </ButtonWebsite>
            <ButtonGithub>
              <a
                href="https://github.com/eocebreiro/portfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button color="primary">Github</Button>
              </a>
            </ButtonGithub>
          </ButtonBox>
        </ProjectInfo>
        <ProjectPhoto>TESSST</ProjectPhoto>
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
                <Button color="primary">Website</Button>
              </a>
            </ButtonWebsite>
          </ButtonBox>
        </ProjectInfo>
        <ProjectPhoto>TESSST</ProjectPhoto>
      </ProjectRow>
    </Section>
  );
};

import styled from "styled-components";
import { device } from "../utils/device";

export const Section = styled.div`
  width: 100%;
  padding-top: 80px;
  padding-right: 10px;
  padding-left: 10px;
  max-width: 1100px;
  margin: 0 auto;
  flex-grow: 1;

  @media ${device.laptop} {
  }
  @media ${device.tablet} {
  }
  @media ${device.mobileL} {
  }
  @media ${device.mobile} {
  }
`;
export const LandingSection = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-right: 4rem;
  padding-left: 4rem;
  padding-bottom: 2rem;
  align-items: center;
  justify-content: center;

  @media ${device.laptop} {
    padding-right: 2rem;
    padding-left: 2rem;
  }
  @media ${device.tablet} {
    padding-right: 2rem;
    padding-left: 2rem;
  }
  @media ${device.mobileL} {
    padding-right: 1rem;
    padding-left: 1rem;
  }
  @media ${device.mobile} {
    padding-right: 1rem;
    padding-left: 1rem;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  padding-top: 80px;
  max-width: 1100px;
  margin: 0 auto;
  flex-grow: 1;

  @media ${device.laptop} {
  }
  @media ${device.tablet} {
  }
  @media ${device.mobileL} {
  }
  @media ${device.mobile} {
  }
`;

export const Title = styled.div`
  display: flex;  
  flex-direction: column;
  align-items: center;
  }
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  height: 100%;
`;

export const Col = styled.div`
  padding-bottom: 10px;
  padding-top: 10px;
  overflow: visible;
`;

//Used in Main to have things align to the left
export const MainPageContent = styled.div`
  max-width: 45%;
  min-width: 300px;
  min-height: 100%;
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  justify-content: center;
`;

//Delete later
export const Div = styled.div`
  padding-bottom: 10px;
`;

export const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  align-items: center;
  margin: auto;
  padding: 0 2rem;
`;

export const FormOverlay = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: ${(props) => (props.active ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 50px;
`;

export const FormDiv = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: ${(props) => !props.active && "none"};
`;

export const GridDiv = styled.div`
  display: grid;
`;

//Used in About section
export const AboutContainer = styled.div`
  display: grid;
  grid-template-areas: "profile text" "profile icons";
  column-gap: 40px;
  @media ${device.tablet} {
    grid-template-areas: "profile" "text" "icons";
  }
`;

export const ProfileContainer = styled.div`
  grid-area: profile;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
  width: 300px;
  @media ${device.tablet} {
    width: 100%;
  }
`;

export const ProfilePhoto = styled.div`
  grid-area: photo;
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
  @media ${device.tablet} {
  }
`;
export const ProfileLinks = styled.div`
  grid-area: links;
  @media ${device.tablet} {
  }
`;
export const ResumeButton = styled.div`
  grid-area: button;
  display: flex;
  justify-content: center;
  padding: 10px 0;
`;

export const ContactButton = styled.div`
  grid-area: button;
  display: flex;
  justify-content: center;
  padding: 20px 0;
`;

export const TextContainer = styled.div`
  grid-area: text;
  padding-bottom: 50px;
`;

export const IconContainer = styled.div`
  grid-area: icons;
  display: grid;
  grid-template-areas: "top top top top" "left mid1 mid2 right";
  column-gap: 10px;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

export const IconText = styled.div`
  grid-area: top;
`;

export const IconColLeft = styled.div`
  grid-area: left;
  display: grid;
  justify-content: center;
  grid-template-rows: auto auto auto;
  row-gap: 30px;
  margin-right: 5px;

  @media ${device.mobileL} {
    gap: 10px;
  }
`;
export const IconColRight = styled.div`
  grid-area: right;
  display: grid;
  justify-content: center;
  grid-template-rows: auto auto auto;
  row-gap: 30px;
  margin-right: 5px;

  @media ${device.mobileL} {
    row-gap: 10px;
  }
`;
export const IconColMiddle1 = styled.div`
  grid-area: mid1;
  display: grid;
  justify-content: center;
  grid-template-rows: auto auto auto auto;
  row-gap: 30px;
  margin-right: 5px;

  @media ${device.mobileL} {
    row-gap: 10px;
  }
`;
export const IconColMiddle2 = styled.div`
  grid-area: mid2;
  display: grid;
  justify-content: center;
  grid-template-rows: auto auto auto auto;
  row-gap: 30px;
  margin-right: 5px;

  @media ${device.mobileL} {
    row-gap: 10px;
  }
`;

export const IconBox = styled.div`
  border: 1px solid green;
`;

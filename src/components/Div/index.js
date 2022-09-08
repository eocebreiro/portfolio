import styled from "styled-components";
import { device } from "../utils/device";
import { handleColorType } from "../utils/handleTypes";

export const Section = styled.div`
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
export const LandingSection = styled(Section)`
  min-height: 100vh;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  padding-top: 70px;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${device.tablet} {
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
  gap: 100px;
  width: 100%;
  @media ${device.tablet} {
    flex-direction: column;
    width: 300px;
  }
`;

export const ProfilePhoto = styled.div`
  grid-area: photo;
  padding-right: 30px;
  display: flex;
  justify-content: center;
  @media ${device.tablet} {
    padding-right: 0px;
    padding-bottom: 10px;
  }
`;
export const ProfileLinks = styled.div`
  grid-area: links;
  padding-left: 30px;
  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 0px;
  }
`;
export const ProfileButton = styled.div`
  grid-area: button;
  padding-top: 20px;
`;

export const TextContainer = styled.div`
  padding-bottom: 20px;
`;

export const IconContainer = styled.div`
  display: grid;
  grid-template-areas: "left mid1 mid2 right";
  column-gap: 60px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media ${device.tablet} {
    column-gap: 0;
    justify-content: space-around;
  }
`;

export const IconColLeft = styled.div`
  grid-area: left;
  display: grid;
  grid-template-rows: auto auto auto;
  gap: 30px;
  @media ${device.mobileL} {
    margin-right: 5px;
    gap: 10px;
  }
`;
export const IconColRight = styled.div`
  grid-area: right;
  display: grid;
  grid-template-rows: auto auto auto;
  gap: 30px;
  @media ${device.mobileL} {
    margin-right: 5px;
    gap: 10px;
  }
`;
export const IconColMiddle1 = styled.div`
  grid-area: mid1;
  display: grid;
  grid-template-rows: auto auto auto auto;
  gap: 30px;
  @media ${device.mobileL} {
    margin-right: 5px;
    gap: 10px;
  }
`;
export const IconColMiddle2 = styled.div`
  grid-area: mid2;
  display: grid;
  grid-template-rows: auto auto auto auto;
  gap: 30px;
  @media ${device.mobileL} {
    margin-right: 5px;
    gap: 10px;
  }
`;

export const IconBox = styled.div`
  border: 1px solid green;
`;

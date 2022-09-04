import styled from "styled-components";
import { device } from "../utils/device";

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
  padding-top: 50px;
  max-width: 1100px;
  margin: 0 auto;
  flex-grow: 1;

  @media ${device.laptop} {
  }
  @media ${device.tablet} {
  }
  @media ${device.mobileL} {
    padding-top: 70px;
  }
  @media ${device.mobile} {
    padding-top: 70px;
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

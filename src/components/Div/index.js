import styled from "styled-components";

export const Section = styled.div`
  background: ${(props) => props.background};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  padding-right: 4rem;
  padding-left: 4rem;
  padding-bottom: 2rem;
  padding-top: 100px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  flex-grow: 1;
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
  border: 1px solid orange;
  flex-grow: 1;
  height: 100%;
`;

export const Col = styled.div`
  padding-bottom: 10px;
  flex-grow: 1;
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
  border: 1px solid yellow;
  grid-area: 1 / 1 / 2 / 2;
  display: ${(props) => !props.active && "none"};
`;

export const GridDiv = styled.div`
  display: grid;
`;

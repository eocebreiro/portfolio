import styled from "styled-components";

export const Div = styled.div`
  border: 1px solid red;
  padding-bottom: 10px;
  }
`;

export const Section = styled.div`
  background: ${(props) => props.background};
  min-height: 100vh;
  width: 100%;
  padding-right: 2rem;
  padding-left: 2rem;
  padding-bottom: 2rem;
  padding-top: 100px;
  border-bottom: 1px solid rgba(0,0,0,0.10)
  }
`;

export const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  align-items: center;
  margin: auto;
  padding: 0 2rem;
`;

import styled from "styled-components";

export const RowDiv = styled.div`
  padding-bottom: 40px;
  display: flex;
  justify-content: left;
  gap: 30px;

  }
`;

export const ColDiv = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: left;
  }
`;

export const LeftSideDiv = styled.div`
  max-width: 50%;
  min-width: 300px;
  min-height: 100%;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
`;

export const Div = styled.div`
  padding-bottom: 10px;
  }
`;

export const Section = styled.div`
  background: ${(props) => props.background};
  display: flex;
  flex-direction: column;
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

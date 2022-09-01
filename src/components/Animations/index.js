import styled from "styled-components";

export const SlideRight = styled.div`
  animation: slideRight ease-out 1s;

  @keyframes slideRight {
    0% {
      transform: translateX(-4rem);
    }
    100% {
      transform: translateX(0rem);
    }
  }
`;

export const SlideLeft = styled.div`
  animation: slideLeft ease-out 1s;
  @keyframes slideLeft {
    0% {
      transform: translateX(4rem);
    }
    100% {
      transform: translateX(0rem);
    }
  }
`;

export const SlideUp = styled.div`
  animation: slideUp ease-out 2s;
  position: relative;
  @keyframes slideUp {
    0% {
      transform: translateY(4rem);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

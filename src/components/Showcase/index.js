import styled from "styled-components";
import showcase from "../../img/showcase.jpg";

export const Showcase = styled.div`
  position: relative;
  background: url(${showcase}) no-repeat center center/cover;
  background-size: cover;
  background-position: 50%;
  height: 100vh;
`;

export const DarkOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: #fff;
`;

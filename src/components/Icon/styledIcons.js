import styled from "styled-components";
import { device } from "../utils/device";
import { handleColorType } from "../utils/handleTypes";

export const Box = styled.div`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`;

export const IconDiv = styled.div`
  display: block;
  margin: auto;
  margin-bottom: 5px;
  width: 65px;
  height: 65px;
  @media ${device.laptop} {
    width: 50px;
    height: 50px;
  }
  @media (min-width: 769px) and (max-width: 850px) {
    width: 45px;
    height: 45px;
  }
  @media ${device.tablet} {
    width: 45px;
    height: 45px;
  }
  @media ${device.mobileL} {
    width: 45px;
    height: 45px;
  }
  @media ${device.mobile} {
    width: 40px;
    height: 40px;
  }
`;

export const FancyBox = styled.div`
  border: double 3px transparent;
  border-image-splice: 1;
  border-radius: 10px;
  background-image: linear-gradient(
      ${handleColorType("dark")},
      ${handleColorType("dark")}
    ),
    radial-gradient(circle at top left, cyan, ${handleColorType("primary")});
  background-origin: border-box;
  background-clip: content-box, border-box;

  @media ${device.tablet} {
    border: double 2px transparent;
  }
  @media ${device.mobileL} {
    border: double 2px transparent;
  }
  @media ${device.mobile} {
    border: double 1.5px transparent;
  }
`;

export const Name = styled.p`
  text-align: center;
  font-size: 1rem;
  line-height: 15px;
  line-spacing: 10px;
  @media ${device.laptop} {
    font-size: 0.9rem;
  }
  @media (min-width: 769px) and (max-width: 850px) {
    font-size: 0.85rem;
  }
  @media ${device.tablet} {
    font-size: 0.85rem;
  }
`;

export const IconContainer = styled.div``;

export const Wrapper = styled.div`
  display: grid;
  width: 115px;
  height: 115px;
  @media ${device.laptop} {
    width: 95px;
    height: 95px;
  }
  @media (min-width: 769px) and (max-width: 850px) {
    width: 80px;
    height: 85px;
  }
  @media ${device.tablet} {
    width: 85px;
    height: 85px;
  }
  @media ${device.mobileL} {
    width: 80px;
    height: 80px;
  }
  @media ${device.mobile} {
    width: 70px;
    height: 75px;
  }
`;

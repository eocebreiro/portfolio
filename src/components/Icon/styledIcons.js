import styled from "styled-components";
import { device } from "../utils/device";
import { handleColorType } from "../utils/handleTypes";

export const Box = styled.div`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`;
export const FancyBox = styled.div`
  border: double 3px transparent;
  border-image-splice: 1;
  border-radius: 30px;
  background-image: linear-gradient(
      ${handleColorType("dark")},
      ${handleColorType("dark")}
    ),
    radial-gradient(circle at top left, cyan, ${handleColorType("primary")});
  background-origin: border-box;
  background-clip: content-box, border-box;
`;

export const Name = styled.p`
  padding-top: 2px;
  text-align: center;
`;

export const Container = styled.div`
  padding: 15px 25px;
`;

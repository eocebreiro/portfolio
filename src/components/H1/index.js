import styled from "styled-components";
import { handleColorType, handleDesktopSizeType } from "../utils/handleTypes";

export const H1 = styled.h1`
  padding-bottom: 10px;
  color: ${(props) => handleColorType(props.color)};
  font-size: ${(props) => handleDesktopSizeType(props.size)};
  }
`;

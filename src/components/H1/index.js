import styled from "styled-components";
import { handleColorType, handleDesktopSizeType } from "../utils/handleTypes";

export const H1 = styled.h1`
  color: ${(props) => handleColorType(props.color)};
  font-size: ${(props) => handleDesktopSizeType(props.size)};
padding-bottom: 20px;  
}
`;

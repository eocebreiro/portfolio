import styled from "styled-components";
import { handleColorType, handleDesktopSizeType } from "../utils/handleTypes";

export const Span = styled.span`
  color: ${(props) => handleColorType(props.color)};
  font-size: ${(props) => handleDesktopSizeType(props.size)};
`;

export const LogoSpan = styled(Span)`
  font-size: ${(props) => handleDesktopSizeType(props.size)};
  letter-spacing: 3.5px;
`;

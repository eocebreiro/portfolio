import styled from "styled-components";
import { handleColorType } from "../utils/handleTypes";

export const Span = styled.span`
  color: ${(props) => handleColorType(props.color)};

  }
`;

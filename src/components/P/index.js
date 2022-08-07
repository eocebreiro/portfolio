import styled from "styled-components";
import { handleColorType, handleDesktopSizeType } from "../utils/handleTypes";

export const P = styled.p`
    font-size: ${(props) => handleDesktopSizeType(props.size)};
    padding-bottom: 20px;
  }
`;

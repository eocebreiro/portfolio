import styled from "styled-components";
import { handleColorType, handleDesktopSizeType } from "../utils/handleTypes";

export const P = styled.p`
    font-size: ${(props) => handleDesktopSizeType(props.size)};

  }
`;
export const Logo = styled.p`
  font-size: 1.75rem;
  letter-spacing: 2.5px;
`;

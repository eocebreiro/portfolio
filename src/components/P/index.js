import styled from "styled-components";
import { handleColorType, handleDesktopSizeType } from "../utils/handleTypes";
import { device } from "../utils/device";

export const P = styled.p`
    font-size: ${(props) => handleDesktopSizeType(props.size)};
  }
`;

export const PTitle = styled.p`
  color: ${(props) => props.color && handleColorType(props.color)};
  text-align: center;
  font-size: 3.5rem;
  letter-spacing: 3px;
  font-weight: 300;

  @media ${device.laptop} {
    font-size: 3rem;
  }
  @media ${device.tablet} {
    font-size: 2.5rem;
  }
  @media ${device.mobileL} {
    font-size: 1.75rem;
  }
  @media ${device.mobile} {
    font-size: 1.5rem;
  }
`;
export const Span = styled.span`
    color: ${(props) => props.color && handleColorType(props.color)}
  }
`;

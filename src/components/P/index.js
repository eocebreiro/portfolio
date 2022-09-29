import styled from "styled-components";
import { handleColorType } from "../utils/handleTypes";
import { device } from "../utils/device";

export const PAbout = styled.p`
  font-size: 1.2rem;
  letter-spacing: 1.5px;
  line-height: 1.8;
  @media ${device.laptop} {
    font-size: 1.2rem;
  }
  @media ${device.tablet} {
    font-size: 1rem;
  }
  @media ${device.mobileL} {
    font-size: 1rem;
  }
  @media ${device.mobile} {
    font-size: 1rem;
  }
`;

export const PCenter = styled(PAbout)`
  text-align: center;
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

// Used in Projects
export const P = styled.p`
  font-size: 1rem;
  letter-spacing: 1.5px;
  line-height: 1.8;
`;
export const SubHeading = styled.p`
  font-size: 1.75rem;
  letter-spacing: 1.5px;
  font-weight: 600;
  @media ${device.tablet} {
    text-align: center;
  }
`;

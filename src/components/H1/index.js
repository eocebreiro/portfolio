import styled from "styled-components";
import { handleColorType } from "../utils/handleTypes";
import { device } from "../utils/device";

export const H1 = styled.h1`
  font-size: 3.5rem;
  padding-bottom: 30px;
  text-align: center;

  @media ${device.laptop} {
    font-size: 3rem;
  }
  @media ${device.tablet} {
    font-size: 3rem;
  }
  @media ${device.mobileL} {
    font-size: 2.5rem;
  }
  @media ${device.mobile} {
    font-size: 2.5rem;
  }
`;

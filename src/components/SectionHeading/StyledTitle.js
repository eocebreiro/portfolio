import styled from "styled-components";
import { handleColorType } from "../utils/handleTypes";
import { device } from "../utils/device";

export const Title = styled.h1`
  margin-bottom: 40px;
  font-size: 3.5rem;
  text-align: center;
  position: relative;
  border-bottom: 3.5px solid ${handleColorType("primary")};
  line-height: 70px;

  @media ${device.laptop} {
    line-height: 60px;
    font-size: 3rem;
  }
  @media ${device.tablet} {
    line-height: 60px;
    font-size: 3rem;
  }
  @media ${device.mobileL} {
    line-height: 55px;
    font-size: 2.5rem;
  }
  @media ${device.mobile} {
    line-height: 55px;
    font-size: 2.5rem;
  }

  &:before {
    position: absolute;
    content: "";
    left: 47%;
    bottom: -10px;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background: ${handleColorType("primary")};
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

import { css } from "styled-components";
import { handleColorType } from "../utils/handleTypes";
import { device } from "../utils/device";

export const buttonStyles = css`
  display: inline-block;
  padding: 0.4rem 1.3rem;
  font-size: 1.5rem;
  width: ${(props) => (props.width ? props.width : "auto")};
  cursor: pointer;
  margin-right: 0.5rem;
  transition: all 0.3s ease;
  outline: none;
  letter-spacing: 3px;
  text-decoration: transparent;
  background: none;
  color: ${(props) => (props.color ? handleColorType(props.color) : "black")};
  border: 2px solid
    ${(props) => (props.color ? handleColorType(props.color) : "black")};
  &:hover {
    color: white;
    background: ${(props) =>
      props.color ? handleColorType(props.color) : "black"};
    border: 2px solid
      ${(props) => (props.color ? handleColorType(props.color) : "black")};
  }

  @media ${device.laptop} {
    font-size: 1.25rem;
  }
  @media ${device.tablet} {
    font-size: 1.25rem;
  }
  @media ${device.mobileL} {
    font-size: 1rem;
  }
  @media ${device.mobile} {
    font-size: 1rem;
  }
`;

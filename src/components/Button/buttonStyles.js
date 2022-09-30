import { css } from "styled-components";
import { handleColorType } from "../utils/handleTypes";
import { device } from "../utils/device";

export const buttonStyles = css`
  display: inline-block;
  padding: 0.4rem 1.3rem;
  border-radius: 5px;
  font-size: 1.25rem;
  width: ${(props) => (props.width ? props.width : "auto")};
  cursor: pointer;
  transition: all 0.3s ease;
  outline: none;
  letter-spacing: 3px;
  text-decoration: transparent;
  background: none;
  ${(props) =>
    props.color === "primary" &&
    css`
      color: ${(props) =>
        props.color ? handleColorType(props.color) : "black"};
      border: 2px solid
        ${(props) => (props.color ? handleColorType(props.color) : "black")};
      &:hover {
        color: white;
        background: ${(props) =>
          props.color ? handleColorType(props.color) : "black"};
        border: 2px solid
          ${(props) => (props.color ? handleColorType(props.color) : "black")};
      }
    `}

  ${(props) =>
    props.color === "github" &&
    css`
      color: black;
      background: white;
      border: 2px solid white;
      &:hover {
        color: white;
        background: grey;
        border: 2px solid grey;
      }
    `}

    ${(props) =>
    props.color === "website" &&
    css`
      color: white;
      background: #4299e1;
      border: 2px solid #4299e1;
      &:hover {
        color: white;
        background: #2a608c;
        border: 2px solid #2a608c;
      }
    `}

  @media ${device.laptop} {
    font-size: 1.1rem;
  }
  @media ${device.tablet} {
    font-size: 1.1rem;
  }
  @media ${device.mobileL} {
    font-size: 1rem;
  }
  @media ${device.mobile} {
    font-size: 1rem;
  }
`;

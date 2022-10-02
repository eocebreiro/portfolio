import { css } from "styled-components";
import { handleColorType } from "../utils/handleTypes";
import { device } from "../utils/device";

export const buttonStyles = css`
  display: inline-block;
  padding: 0.4rem 0.7rem;
  font-size: 1.25rem;
  width: ${(props) => (props.width ? props.width : "auto")};
  cursor: pointer;
  transition: all 0.3s ease;
  outline: none;
  letter-spacing: 2px;
  text-decoration: transparent;
  background: none;
  ${(props) =>
    props.color === "primary" &&
    css`
      background: transparent;
      color: ${handleColorType(props.color)};
      border: 2px solid ${handleColorType(props.color)};
      &:hover {
        color: white;
        background: ${handleColorType(props.color)};
        border: 2px solid ${handleColorType(props.color)};
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
      color: ${handleColorType("primary")};
      border: 2px solid ${handleColorType("primary")};
      &:hover {
        color: white;
        background: ${handleColorType("primary")};
        border: 2px solid ${handleColorType("primary")};
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

import styled, { css } from "styled-components";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

import { handleColorType, handleDesktopSizeType } from "../utils/handleTypes";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: ${(props) => handleDesktopSizeType(props.size)};

  ${(props) =>
    props.type !== "plain" &&
    css`color: white;
  transition: all .1s ease;
  &:hover {
    color: ${(props) => handleColorType(props.color)};
    border-bottom: 1.5px solid white;`}
`;

export const StyledHashLink = styled(HashLink)`
  text-decoration: none;
  color: white;
  font-size: ${(props) => handleDesktopSizeType(props.size)};

  ${(props) =>
    props.type !== "plain" &&
    css`
      color: ${(props) =>
        props.active ? handleColorType(props.color) : "white"};
      border-bottom: ${(props) => props.active && "1.5px solid white"};
      transition: all 0.1s ease;

      &:hover {
        color: ${(props) => handleColorType(props.color)};
        border-bottom: 1.5px solid white;
      }
    `}
`;

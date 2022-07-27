import { css } from "styled-components";
import { handleColorType, handleDesktopSizeType } from "../utils/handleTypes";

export const buttonStyles = css`
  display: inline-block;
  padding: 0.4rem 1.3rem;
  font-size: 1rem;
  width: auto;
  cursor: pointer;
  margin-right: 0.5rem;
  transition: all 0.3s ease;
  outline: none;
  color: white;
  border: 2px solid white;
  background: none;
  text-decoration: transparent;
  font-size: ${(props) => handleDesktopSizeType(props.size)};
  &:hover {
    background: ${(props) => handleColorType(props.color)};
    border: 2px solid ${(props) => handleColorType(props.color)};
  }
`;

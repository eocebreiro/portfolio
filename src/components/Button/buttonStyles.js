import { css } from "styled-components";
import {
  handleColorType,
  handleDesktopSizeType,
  handleButtonType,
} from "../utils/handleTypes";

export const buttonStyles = css`
  display: inline-block;
  padding: 0.4rem 1.3rem;
  font-size: 1rem;
  width: ${(props) => (props.width ? props.width : "auto")};
  cursor: pointer;
  margin-right: 0.5rem;
  transition: all 0.3s ease;
  outline: none;

  text-decoration: transparent;
  ${(props) => handleButtonType(props.type)}
`;

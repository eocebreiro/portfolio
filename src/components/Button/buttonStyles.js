import { css } from "styled-components";

export const buttonStyles = css`
  display: inline-block;
  border-radius: 0.3rem;
  padding: 0.4rem 1.3rem;
  font-size: 1rem;
  border: none;
  width: auto;
  cursor: pointer;
  margin-right: 0.5rem;
  transition: opacity 0.2s ease-in;
  outline: none;
  color: red;
  background: green;
  &:hover {
    opacity: 0.8;
  }
`;

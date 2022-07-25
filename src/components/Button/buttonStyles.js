import { css } from "styled-components";

export const buttonStyles = css`
  display: inline-block;
  padding: 0.4rem 1.3rem;
  font-size: 1rem;
  width: auto;
  cursor: pointer;
  margin-right: 0.5rem;
  transition: opacity 0.2s ease-in;
  outline: none;
  color: white;
  border: 2px solid white;
  background: none;
  text-decoration: none;
  &:hover {
    background: #00b85b;
    border: 2px solid #00b85b;
  }
`;

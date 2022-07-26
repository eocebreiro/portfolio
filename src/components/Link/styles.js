import styled, { css } from "styled-components";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  ${(props) =>
    props.type !== "plain" &&
    css`color: white;
  transition: all .1s ease;
  &:hover {
    color: #00b85b;
    border-bottom: 1.5px solid white;`}
`;

export const StyledHashLink = styled(HashLink)`
  text-decoration: none;
  color: white;
  ${(props) =>
    props.type !== "plain" &&
    css`
    color: white;
  transition: all .1s ease;
  &:hover {
    color: #00b85b;
    border-bottom: 1.5px solid white;`}
`;

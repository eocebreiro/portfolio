import styled from "styled-components";
import { handleColorType } from "../utils/handleTypes";

export const Input = styled.input`
  padding: 0.5rem 1rem;
  height: 50px;
  font-size: 1rem;
  display: block;
  width: 100%;
  color: #fff;
  background-color: #2b2b2b;
  display: ${(props) => props.display && "none"};
  border: none;
  margin: 0;
  overflow: visible;
  outline: none;
  &:-webkit-autofill {
    transition-delay: 9999s;
  }

  ${(props) =>
    props.error
      ? `background: linear-gradient(to right, ${handleColorType(
          "danger"
        )}, ${handleColorType(
          "danger"
        )}) bottom left / 0% 3px no-repeat #2b2b2b; background-size: 100% 3px; transition: background-size 1s;`
      : `background: linear-gradient(to right, ${handleColorType(
          "primary"
        )}, ${handleColorType(
          "primary"
        )}) bottom left / 0% 3px  no-repeat #2b2b2b; transition: all .3s ease; &:focus {background-size: 100% 3px;}`}
`;

export const TextArea = styled.textarea`
  overflow: auto;
  appearance: none;
  resize: none;
  font-family: inherit;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  display: block;
  width: 100%;
  color: #fff;
  background-color: #2b2b2b;
  border: none;
  margin: 0;
  outline: none;
  margin-bottom: 20px;
  &:-webkit-autofill {
    transition-delay: 9999s;
  }

  ${(props) =>
    props.error
      ? `background: linear-gradient(to right, ${handleColorType(
          "danger"
        )}, ${handleColorType(
          "danger"
        )}) bottom left / 0% 3px no-repeat #2b2b2b; background-size: 100% 3px; transition: background-size 1s;`
      : `background: linear-gradient(to right, ${handleColorType(
          "primary"
        )}, ${handleColorType(
          "primary"
        )}) bottom left / 0% 3px  no-repeat #2b2b2b; transition: all .3s ease; &:focus {background-size: 100% 3px;}`}
`;

import styled from "styled-components";

export const Input = styled.input`
  p {
    text-align: left;
    padding: 0;
    background: #dc3545;
    text: #fff;
  }
  &:focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%);
  }
  padding: 0.5rem 1rem;
  font-size: 1.15rem;
  border-radius: 0.3rem;
  display: block;
  width: 100%;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  display: ${(props) => props.display && "none"};
  outline-color: ${(props) => (props.error ? "#dc3545" : "none")};
  border: 1px solid ${(props) => (props.error ? "#dc3545" : "#9b9fa3")};
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  margin: 0;
  overflow: visible;
`;

export const TextArea = styled.textarea`
  overflow: auto;
  appearance: none;
  resize: none;
  font-family: inherit;
  padding: 0.5rem 1rem;
  font-size: 1.15rem;
  border-radius: 0.3rem;
  display: block;
  width: 100%;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  display: ${(props) => props.display && "none"};
  outline-color: ${(props) => (props.error ? "#dc3545" : "none")};
  border: 1px solid ${(props) => (props.error ? "#dc3545" : "#9b9fa3")};
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  margin: 0;

  &:focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%);
  }
`;

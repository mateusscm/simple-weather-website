import styled from "styled-components";

export const FormSearch = styled.form`
  width: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 100px;
  grid-template-areas: "input select button";
  grid-gap: 20px;
  margin-bottom: 10px;

  select,
  input,
  button {
    padding: 10px;
    border-radius: 8px;
    border-style: none;
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
    outline: none;
  }

  select {
    background-color: white;
  }

  button {
    background-color: #264653;
    color: white;
    font-weight: bold;
    cursor: pointer;
    text-transform: uppercase;
  }
`;

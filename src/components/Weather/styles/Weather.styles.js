import styled from "styled-components";

export const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CardWeather = styled.div`
  margin: 10px 0px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  min-width: 300px;
  font-weight: 400;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);

  .title {
    font-size: 2rem;

    > span {
      font-size: 0.7rem;
      vertical-align: super;
      border: 2px solid #e76f51;
      background-color: #e76f51;
      border-radius: 10px;
      color: white;
      padding: 0px 8px;
      text-shadow: 2px 2px 2px #000000;
    }
  }

  .divider {
    width: 50%;
    margin-top: 10px;
  }

  .icon {
    img {
      margin-top: 10px;
      width: 150px;
      height: 150px;
      background-color: rgba(231, 111, 81, 0.2);
      border-radius: 50%;
      padding: 15px;
      box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.1),
        0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
    }
  }
`;

export const FormSearch = styled.form`
  width: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 100px;
  grid-template-areas: "input select button";
  grid-gap: 20px;

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

  button {
    background-color: #264653;
    color: white;
    font-weight: bold;
    cursor: pointer;
    text-transform: uppercase;
  }
`;

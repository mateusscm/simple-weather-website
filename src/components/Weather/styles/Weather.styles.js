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
    width: 100%;
  }
`;

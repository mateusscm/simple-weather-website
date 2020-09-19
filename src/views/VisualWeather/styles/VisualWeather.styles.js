import styled from "styled-components";

export const WeatherContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ContainerMiniCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 5px 10px;
  padding-left: 10px;
  flex: 1;
`;

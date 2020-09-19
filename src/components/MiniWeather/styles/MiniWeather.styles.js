import styled from "styled-components";

export const MiniCardWeather = styled.div`
  padding: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  width: 100%;
  height: 123px;
  font-weight: 400;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

export const IconStory = styled.img`
  width: 50px;
  height: 50px;
`;

export const TitleStory = styled.h4`
  /* font-size: 1rem; */

  > span {
    font-size: 0.5rem;
    vertical-align: super;
    border: 2px solid #e76f51;
    background-color: #e76f51;
    border-radius: 10px;
    color: white;
    padding: 0px 8px;
    text-shadow: 2px 2px 2px #000000;
  }
`;

export const TempStory = styled.h2`
  border: 2px solid #e76f51;
  background-color: #e76f51;
  border-radius: 10px;
  color: white;
  padding: 0px 8px;
  text-shadow: 2px 2px 2px #000000;
`;

import styled from "styled-components";
import warm from "../../../assets/images/warm.jpg";
import cold from "../../../assets/images/cold.jpg";

export const CardWeather = styled.div`
  padding: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  width: 300px;
  max-width: 300px;
  height: 380px;
  font-weight: 400;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  flex: 1;
  /* color: ${(props) => (props.temp > 15 ? "white" : "black")}; */

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: url(${(props) => (props.temp > 15 ? warm : cold)}) center center;
    border-radius: 8px;
  }

  .title {
    font-size: 2rem;

    > svg {
      height: 20px;
      margin-right: 5px;
      margin-bottom: 10px;
    }

    > .city {
      max-width: 190px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      display: inline-block;
      vertical-align: bottom;
    }

    > .country {
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

  .temp {
    border: 2px solid #e76f51;
    background-color: #e76f51;
    border-radius: 10px;
    color: white;
    padding: 0px 8px;
    text-shadow: 2px 2px 2px #000000;
  }

  .feels {
    font-weight: 500;
  }

  .divider {
    width: 50%;
    margin-top: 10px;
  }

  .date {
    font-size: 0.7rem;
  }

  .icon {
    position: relative;
    img {
      margin-top: 10px;
      width: 150px;
      height: 150px;
      border-radius: 50%;
    }
    .phrase {
      position: absolute;
      top: 75px;
      right: -50px;
      font-size: 0.9rem;
    }
  }
`;

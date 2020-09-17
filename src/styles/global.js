import { createGlobalStyle } from "styled-components";
import "./fonts.css";
import warm from '../assets/images/warm.jpg';
import cold from '../assets/images/cold.jpg';

export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: #e1e1e1;
    background-image: url(${warm || cold});
    background-repeat: round;
    font-size: 14px;
    color: #000;
    font-family: 'Kite One', sans-serif;
    width: 1230px;
    max-width: 90%;
    margin: 36px auto;
    height: calc(100vh - 72px);
    }
`;

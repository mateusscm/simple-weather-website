import { createGlobalStyle } from "styled-components";
import "./fonts.css";

export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    /* background: #70e1f5;  
background: -webkit-linear-gradient(to right, #ffd194, #70e1f5);  
background: linear-gradient(to right, #ffd194, #70e1f5);  */
    background: #C9FFBF;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #FFAFBD, #bff6ff);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #FFAFBD, #bff6ff); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

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

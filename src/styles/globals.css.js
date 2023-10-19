import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

* {
    margin: 0px;
    padding: 0px
    box-sizing: border-box;
}


:root {
    --black: #263238;
    --gray: #717171;
    --gray-dark: #4D4D4D;
    --gray-v: #18191F;
    --gray-light: #89939E;
    --gray-blue: #ABBED1;
    --silver: #F5F7FA;
    --white: #FFFFFF;
    --primary: #28CB8B;
    --secondary: #263238;
    --info: #2194f3;
    --green-100: #43A046;
    --green-200: #388E3B;
    --green-300: #237D31;
    --green-400: #237D31;
    --green-500: #4CAF4F;
    --green-600: #103E13;
}

html,
body {
    font-size: 100%;
    font-family:'Inter', sans-serif;
}
ul{
    padding: 0px;
    margin: 0px;
}
ul li {
    list-style: none;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
}
img{
    width:100%
}

`

export default GlobalStyle;

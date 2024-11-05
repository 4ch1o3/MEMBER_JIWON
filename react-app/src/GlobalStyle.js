import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #348bac;
    --button-primary: #343e83;
    --button-secondary: #d9d9d9;
    --main-gradient: linear-gradient(45deg, #30cfd0 14.44%, #330867 85.56%);
    --white: #f8f8ff;
    --black: #202123;

    --title-font: 24px;
    --subtitle-font: 18px;
    --content-font: 16px ;
    --detail-font: 14px;

    
}



  * {
font-family: "Pretendard";
    line-height: 100%;
    
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
  background: var(--main-gradient);
  background-size: cover;
  min-height: 100vh;
  background-repeat: no-repeat;
  }
`;

export default GlobalStyle;

import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`


  :root {
    --blue: #4582EC;
    --blue-hover: #226be8;
    --blue-light: #4582ecbf;
    --smalt: #003399;
    --indigo: #6610f2;
    --purple: #8760d4;
    --purple-hover: #6f42c1;
    --pink: #e83e8c;
    --red: #d9534f;
    --orange: #fd7e14;
    --orange-error: #ff6f42;
    --yellow: #f0ad4e;
    --green: #02B875;
    --teal: #20c997;
    --cyan: #17a2b8;
    --white: #fff;
    --gray: #868e96;
    --gray-lighter: #F1F2F4;
    --gray-inbox-name: #C9CFDC;
    --primary: #4582EC;
    --secondary: #adb5bd;
    --success: #02B875;
    --info: #17a2b8;
    --warning: #f0ad4e;
    --danger: #d9534f;
    --light: #f8f9fa;
    --dark: #181921;
    --dark-lighter: #21222b;
    --dark-text: #465064;
    --breakpoint-sm: 540px;
    
    // Spacing
    --spacing-xs: 4px; // 4px
    --spacing-s:  calc(var(--spacing-xs) * 2); // 8px
    --spacing-m: calc(var(--spacing-s) * 2); // 16px
    --spacing-l: calc(var(--spacing-m) * 2); // 32px
    --spacing-xl: calc(var(--spacing-m) * 3); // 48px
    --spacing-xxl: calc(var(--spacing-l) * 2); // 64px
    --spacing-3xl: calc(var(--spacing-l) * 3); // 96px


    // Typography
    --font-size-tiny: 12px;
    --font-size-small: 14px;
    --font-size-default: 16px;
  }
  
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: Fira Sans Condensed;
    color: var(--dark);
    background: var(--dark);
  }
  
  button, input, select {
    font-family: Fira Sans Condensed, sans-serif;
    outline: none;
    border: none;
    background: none;
    
    &::placeholder {
      color: var(--gray);
    }
    &:-ms-input-placeholder {
      color: var(--gray);
    }
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: Fira Sans Condensed, sans-serif;
  }
`

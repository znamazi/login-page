import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }

    html,
    body {
      overflow-y:auto;
      font-family: Exo2-Regular;
      background: url('/assets/images/background-why-blockchain-technology-1080p.jpg');
      color:#ffffff;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-rendering: optimizeLegibility;
      -moz-osx-font-smoothing: grayscale;
      font-smoothing: antialiased;
      -webkit-font-smoothing: antialiased;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    @font-face {
      font-family: 'nova-flat-v22-latin-regular';
      font-weight:normal;
      src: url(/fonts/nova-flat-v22-latin-regular.eot) format('eot'),
        url(/fonts/nova-flat-v22-latin-regular.ttf) format('turetype'),
        url(/fonts/nova-flat-v22-latin-regular.woff) format('woff');
      font-display: block;
    }
    @font-face {
      font-family: 'Exo2-Regular';
      font-weight:normal;
      src: url(/fonts/Exo2-Regular.eot) format('eot'),
      url(/fonts/Exo2-Regular.ttf) format('turetype'),
      url(/fonts/Exo2-Regular.woff) format('woff');
      font-display: block;
    }

    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    input[type='number'] {
      -moz-appearance: textfield;
      border:0; 
    }

    .ReactModal__Body--open {
      overflow-y: hidden;
    }

    /* width */
    ::-webkit-scrollbar {
      width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 20px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }

`
export default GlobalStyle

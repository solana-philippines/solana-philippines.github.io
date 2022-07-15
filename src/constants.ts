import { createGlobalStyle } from "styled-components";

const Colors = {
  BLACK: "#000000",
  WHITE: "#FFFFFF",
  RED: "#CE1126",
  YELLOW: "#FCD116",
  BLUE: "#0038A8",
};

const GlobalStyle = createGlobalStyle`
  // Baseline Styles
  * {
    margin: 0;
    padding: 0;
  }

  html, body {
    margin: 0;
    padding: 0;
    background-color: ${Colors.BLACK};
    color: ${Colors.WHITE};

    // baseline font size
    font-size: 16px;
  }

  .header-text-size {
    font-size: 10em;
    font-family: Lato Black;
  }

  .subheader-text-size {
    font-size: 5em;
    font-family: Lato Bold;
  }

  .section-text-size {
    font-size: 3em;
    font-family: Lato Black;
  }

  .body-text-size {
    font-size: 1em;
    font-family: Lato Regular;
  }

  .secondary-text-size {
    font-size: 0.8em;
    font-family: Lato Regular;
  }
`;

export { Colors, GlobalStyle };

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

    @media only screen and (max-width: 768px) {
      text-wrap: break-word;
      font-size: 7em;
    }
  }

  .subheader-text-size {
    font-size: 5em;
  }

  .section-text-size {
    font-size: 3em;
  }

  .body-text-size {
    font-size: 1em;
  }

  .secondary-text-size {
    font-size: 0.8em;
  }
`;

export { Colors, GlobalStyle };

import styled from "styled-components";

const StyledHeader = styled.header`
  font-family: Lato Black;
  background: #fcd116;
  background: linear-gradient(to right, #fcd116 0%, #0038a8 30%, #ce1126 40%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media only screen and (max-width: 768px) {
    margin-top: 0.5em;
    font-size: 4em;
  }
`;

export { StyledHeader };

import styled from "styled-components";

const StyledHeader = styled.header`
  margin-top: 1em;
  font-family: Lato Black;
  font-size: 5em;
  background: #fcd116;
  background: linear-gradient(to right, #fcd116 0%, #0038a8 51%, #ce1126 66%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media only screen and (max-width: 768px) {
    margin-top: 0.5em;
    font-size: 4em;
  }
`;

const StyledGithub = styled.img`
  width: 7em;
  filter: invert(87%) sepia(100%) saturate(29%) hue-rotate(129deg) brightness(108%) contrast(106%);
    }

  @media only screen and (max-width: 768px) {
    width: 5em; }
`;

const StyledGradient = styled.section`
  min-height: 15em;
  padding: 5vh 8vw;
  box-sizing: border-box;

  background: rgb(252, 209, 22);
  background: linear-gradient(
    90deg,
    rgba(252, 209, 22, 1) 0%,
    rgba(0, 56, 168, 1) 29%,
    rgba(206, 17, 38, 1) 100%
  );
`;

export { StyledHeader, StyledGithub, StyledGradient };

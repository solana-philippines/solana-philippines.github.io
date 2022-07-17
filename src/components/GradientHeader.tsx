import styled from "styled-components";

type Props = {
  text: string;
  size: 1 | 2 | 3 | 4 | 5 | 6;
};

const GradientHeader = ({ text, size }: Props) => (
  <StyledContainer className="header-text-size">
    <StyledHeader sizing={size}>{text}</StyledHeader>
  </StyledContainer>
);

const StyledContainer = styled.div`
  width: 100%;
`;

const StyledHeader = styled.header<{ sizing: number }>`
  display: inline-block;
  margin: ${({ sizing }) => 1 / sizing}em 0;
  font-size: ${({ sizing }) => 1 / sizing}em;
  font-family: Lato Black;
  background: #fcd116;
  background: linear-gradient(to right, #fcd116 0%, #0038a8 51%, #ce1126 66%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media only screen and (max-width: 768px) {
    margin-top: 0.5em;
  }
`;

export default GradientHeader;

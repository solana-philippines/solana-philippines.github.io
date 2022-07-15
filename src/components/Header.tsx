import styled from "styled-components";

type Props = {
  text: string;
  size: 1 | 2 | 3 | 4 | 5 | 6;
};

export default function Header({ text, size }: Props) {
  return (
    <StyledContainer className="header-text-size">
      <StyledHeader sizing={size}>{text}</StyledHeader>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  width: 100%;
`;

const StyledHeader = styled.h1<{ sizing: number }>`
  margin: ${({ sizing }) => 1 / sizing}em 0;
  font-size: ${({ sizing }) => 1 / sizing}em;
  width: 100%;
`;

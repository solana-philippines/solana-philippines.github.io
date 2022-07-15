import styled from "styled-components";

type Props = {
  text: string;
  lineHeight?: number;
};

const DEFAULT_LINE_HEIGHT = 1;

export default function Header({ text, lineHeight }: Props) {
  return (
    <StyledParagraph
      height={lineHeight ? lineHeight : DEFAULT_LINE_HEIGHT}
      className="body-text-size"
    >
      {text}
    </StyledParagraph>
  );
}

const StyledParagraph = styled.p<{ height: number }>`
  line-height: ${({ height }) => height}em;
  width: 100%;
`;

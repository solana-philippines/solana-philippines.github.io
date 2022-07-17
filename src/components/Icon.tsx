import { FC } from "react";
import styled from "styled-components";

type Props = {
  symbol: string;
  size: number;
};

const Icon: FC<Props> = ({ symbol, size }) => (
  <StyledSpan fontSize={size} className="material-symbols-rounded">
    {symbol}
  </StyledSpan>
);

const StyledSpan = styled.span<{ fontSize: number }>`
  font-size: ${({ fontSize }) => fontSize}em;
`;

export default Icon;

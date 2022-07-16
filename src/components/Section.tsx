import { ReactNode } from "react";

import styled from "styled-components";

const DEFAULT_COLUMNS = 1;
const DEFAULT_BREAKPOINT = 768;

type Props = {
  columns?: number;
  breakpoint?: number;
  children?: ReactNode[] | ReactNode;
};

export default function Section({ columns, breakpoint, children }: Props) {
  return (
    <StyledGrid
      bpoint={breakpoint ? breakpoint : DEFAULT_BREAKPOINT}
      cols={columns ? columns : DEFAULT_COLUMNS}
    >
      {children}
    </StyledGrid>
  );
}

const StyledGrid = styled.section<{ cols: number; bpoint: number }>`
  display: grid;
  grid-template-columns: repeat(${({ cols }) => cols}, 1fr);

  margin: 2em 0;
  column-gap: 2em;
  row-gap: 1em;

  @media only screen and (max-width: ${({ bpoint }) => bpoint}px) {
    grid-template-columns: 1fr;
  }
`;

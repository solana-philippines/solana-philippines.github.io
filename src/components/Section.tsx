import { ReactChild } from "react";

import styled from "styled-components";

const DEFAULT_COLUMNS = 1;

type Props = {
  columns?: number;
  children?: ReactChild;
};

export default function Section({ columns, children }: Props) {
  return <StyledGrid cols={columns}>{children}</StyledGrid>;
}

const StyledGrid = styled.section<{ cols?: number }>`
  display: grid;
  grid-template-columsn: repeat(${({ cols }) => (cols ? cols : 1)}, 1fr);
`;

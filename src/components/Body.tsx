import { ReactChild } from "react";

import styled from "styled-components";

type Props = {
  children?: ReactChild[] | ReactChild;
};

export default function Body({ children }: Props) {
  return (
    <StyledMain>
      <StyledBody>{children}</StyledBody>
    </StyledMain>
  );
}

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 900px;
`;

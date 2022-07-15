import styled from "styled-components";

import Section from "./Section";
import { Colors } from "../constants";

type Props = {};

export default function Footer() {
  return (
    <StyledFooter>
      <Section columns={2}></Section>
      <h3>© Official Github Organization for Solana Philippines</h3>
    </StyledFooter>
  );
}

const StyledFooter = styled.nav`
  box-sizing; border-box;
  padding: 5em;

  img {
    width: 5em;
  }

  h3 {
    text-align: center;
    font-family: Lato Regular;
  }
`;

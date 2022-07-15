import styled from "styled-components";

import Section from "./Section";

export default function Footer() {
  return (
    <StyledFooter>
      <Section columns={2}></Section>
      <p className="secondary-text-size">
        © Official Github Organization for Solana Philippines
      </p>
    </StyledFooter>
  );
}

const StyledFooter = styled.nav`
  box-sizing; border-box;
  padding: 5em;

  img {
    width: 5em;
  }

  p {
    text-align: center;
    font-family: Lato Regular;
  }
`;

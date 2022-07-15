import styled from "styled-components";

import { Colors } from "../constants";

type Props = {};

export default function Navbar() {
  return (
    <StyledNav>
      <img
        src="/assets/images/solana-philippines-cropped.jpg"
        alt="Solana Philippines Logo"
      />
      <h3>Solana Philippines - Github</h3>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  box-sizing; border-box;
  padding: 2em 3em;

  img {
    width: 5em;
  }

  h3 {
    font-family: Lato Bold;
  }
`;

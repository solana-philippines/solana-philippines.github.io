import { Link } from "react-router-dom";
import styled from "styled-components";

import { Colors } from "../constants";

type Props = {
  text: string;
  url: string;
};

function Navlink({ text, url }: Props) {
  return (
    <StyledLink className="body-text-size" to={url}>
      {text}
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${Colors.WHITE};
  margin-left: 2em;

  font-family: Lato Bold;

  &:hover {
    text-decoration: underline;
  }
`;

export default function Navbar() {
  return (
    <StyledNav>
      <StyledLeft id="left">
        <img
          src="/assets/images/solana-philippines-cropped.jpg"
          alt="Solana Philippines Logo"
        />
        <h3>Solana Philippines</h3>
      </StyledLeft>
      <StyledRight id="right">
        <Navlink text="Home" url="/" />
        <Navlink text="Projects" url="/projects" />
        <Navlink text="Roadmap" url="/roadmap" />
        <Navlink text="Resources" url="/resources" />
      </StyledRight>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 10vh;
  box-sizing; border-box;
  padding: 0 3em;
`;

const StyledLeft = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 1em;
    width: 3em;
  }

  h3 {
    color: ${Colors.WHITE};
    font-family: Lato Bold;

    @media only screen and (max-width: 768px) {
      display: none;
    }
  }
`;

const StyledRight = styled.div`
  display: flex;
  align-items: center;
`;

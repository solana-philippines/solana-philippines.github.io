import { Link } from "react-router-dom";
import styled from "styled-components";

type Props = {
  text: string;
  url: string;
};

function Navlink({ text, url }: Props) {
  return <Link to={url}>{text}</Link>;
}

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
        <Navlink text="About" url="/" />
        <Navlink text="Projectjs" url="/" />
        <Navlink text="Roadmap" url="/" />
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

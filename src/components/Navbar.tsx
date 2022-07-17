import Icon from "./Icon";

import {
  StyledMenu,
  StyledNav,
  StyledLeft,
  StyledRight,
  StyledLink,
} from "./modules/Navbar.styled";

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
      <StyledMenu>
        <Icon symbol="menu" size={2} />
      </StyledMenu>
    </StyledNav>
  );
}
